// vless://xxxxxx@host-name.com:25806/?type=tcp&security=reality&sni=xxx&pbk=xxxxxx&flow=xtls-rprx-vision&sid=xxxx&fp=chrome#planb-1
//parse the above URL and return the following components: host name, name (after #)
export function parseVlessUrl(url: string) {
  const urlObj = new URL(url)
  const hostName = urlObj.hostname
  const name = urlObj.hash ? urlObj.hash.substring(1) : ''
  return { hostName, name }
}

//split a string by 'vless://' and returen the splitted parts, but keep the 'vless://' prefix in each part
export function splitVlessString(input: string): string[] {
  // split while keeping the "vless://" prefix in each piece
  return input
    .split(/(?=vless:\/\/)/i)
    .map((part) => part.trim())
    .filter((part) => part !== '')
}

//replace the name in the vless URL
export function replaceVlessName(url: string, newName: string) {
  const urlObj = new URL(url)
  urlObj.hash = `#${newName}`
  return urlObj.toString()
}

async function getIpAddress(domain: string): Promise<string[]> {
  try {
    const response = await fetch(`https://dns.google/resolve?name=${domain}`)
    const data = await response.json()

    if (data.Answer) {
      // Filter for Type 1 (A Record / IPv4)
      const ipRecords = data.Answer.filter((record) => record.type === 1)

      if (ipRecords.length > 0) {
        return ipRecords.map((r) => r.data) // Returns an array of IPs
      }
    }

    throw new Error(`no ip found for ${domain}`)
  } catch (error) {
    console.error('DNS lookup failed:', error)
    throw error
  }
}

// Usage
// getIpAddress('example.com').then(ips => console.log(ips));

//get the geolocation from the vless URL host name by calling http://ip-api.com/json/{g.mumi.uk}?fields=countryCode
//return format: { countryCode: 'US' }
export async function getGeolocationFromVlessUrl(url: string) {
  const { hostName } = parseVlessUrl(url)
  const ips = await getIpAddress(hostName)
  //get ip of the domain
  const response = await fetch(`https://ipinfo.io/${ips[0]}`, {
    headers: {
      authorization: `Bearer ${import.meta.env.VITE_IPINFO_TOKEN}`
    }
  })
  if (!response.ok) {
    throw new Error('Failed to fetch geolocation data')
  }
  const data = await response.json()
  return data.country
}

//parse the vless urls and append the geolocation country code to the name
export async function appendGeolocationToVlessNames(
  input: string
): Promise<string> {
  const vlessUrls = splitVlessString(input)
  const updatedUrls = await Promise.all(
    vlessUrls.map(async (url) => {
      const { name } = parseVlessUrl(url)

      const countryCode = await getGeolocationFromVlessUrl(url)
      const newName = name ? `${name}(${countryCode})` : `${countryCode}`
      return replaceVlessName(url, newName)
    })
  )
  return updatedUrls.join('\n\n')
}
