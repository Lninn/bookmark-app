export async function getIconUrl(pageUrl: string) {
  const text = await queryText(pageUrl)

  let iconUrl = getIconUrlFromDoctxt(text)
  if (iconUrl) return iconUrl

  iconUrl = await getIconUrlFromDocuValit(pageUrl)

  return iconUrl
}

const descptionReg = /<meta name="description" content="(?<content>[^"]+)/;
export function getSiteDesc(doc: string) {
  const matched = doc.match(descptionReg);

  let desc = ""
  
  if (matched) {
    const { groups } = matched;
    desc = groups?.content || ""
  }

  return desc;
}

const TitlteReg = /<title(.*)>(?<title>.*)<\/title>/;
export function getSiteTitle(doc: string) {
  const matched = doc.match(TitlteReg);
  if (matched) {
    const { groups } = matched;
    const title = groups ? groups.title : null;

    if (title) {
      return title
    }
  }

  return ""
}

const KeyWordsReg = /<meta name="keywords" content="(?<content>[^"]+)"/;
export function getSiteKeyword(doc: string) {
  const keyWordsMatched = doc.match(KeyWordsReg);
  if (keyWordsMatched) {
    const { groups } = keyWordsMatched;
    const tags = groups ? groups.content : null;

    if (tags) {
      return tags
    }
  }

  return ""
}

async function getIconUrlFromDocuValit(url: string) {
  const obj = new URL(url);
  const tryUrl = obj.origin + "/favicon.ico";

  try {
    const res = await fetch(url);
    const headers = res.headers

    const ct = headers.get("content-type")
    if (!ct) return ""

    if (ct === "text/html; charset=utf-8") return ""

    return res.status === 200 ? tryUrl : "";
  } catch (err: any) {
    console.log("[debug-getIconUrlFromDocuValit]", {
      name: err.name,
      url,
    });
  }

  return "";
}

function getIconUrlFromDoctxt(doc: string) {
  const regex = /<link rel="shortcut icon"(?: type="image\/x-icon")? href="(.*?)"(?: type="image\/x-icon")?>?/;
  let matched = regex.exec(doc);

  let ret = ""
  
  if (matched) {
    ret = matched[1]
  }

  const reg2 = /<link rel="icon" href="(?<href>[^"]+)"/
  matched = reg2.exec(doc)
  if (matched) {
    ret = matched[1]
  }

  return ret
}

export async function queryText(pageUrl: string) {
  let doc = ""
  
  try {
    const res = await fakeRequest(pageUrl)

    doc = await res.text()
  } catch (error: any) {
    console.log("[queryText-error]", {
      name: error.name,
      error,
    })
  }

  return doc
}

async function fakeRequest(url: string) {
  return await fetch(url)
}
