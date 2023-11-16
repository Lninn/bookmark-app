import Image from "next/image"

const originalUrls = [
  "https://www.baidu.com/",
  "https://music.163.com/#",
  "https://www.gatsbyjs.com/",
  "https://www.ruanyifeng.com/",
];

const KeyWordsReg = /<meta name="keywords" content="(?<content>[^"]+)"/;
const descptionReg = /<meta name="description" content="(?<content>[^"]+)"/;
const TitlteReg = /<title(.*)>(?<title>.*)<\/title>/;

async function createData(urls: string[]) {
  const data = [];

  let i = 0;
  while (i < urls.length) {
    const info = await createItem(urls[i]);

    data.push(info);
    i++;
  }

  return data;
}

async function getIcon(url: string, doc: string) {
  const obj = new URL(url);

  const tryUrl = obj.origin + "/favicon.ico";
  const isPass = await urlHasValid(tryUrl);

  if (isPass) return tryUrl;

  let matchedRes = doc.match(/<link rel="shortcut icon" href="(?<href>[^"]+)"/);
  if (matchedRes) {
    const href = matchedRes.groups?.href;

    if (href) return href;
  }

  matchedRes = doc.match(/<link rel="icon" href="(?<href>[^"]+)"/);
  if (matchedRes) {
    const href = matchedRes.groups?.href;

    if (href) return obj.origin + href;
  }

  return "";
}

async function urlHasValid(url: string) {
  try {
    const res = await fetch(url);

    return res.status === 200;
  } catch (err) {
    err;
  }

  return false;
}

/**
 * 
 * https://stackoverflow.com/questions/5119041/how-can-i-get-a-web-sites-favicon
 * 
 * Look for the favicon.ico at the root of the domain

  www.domain.com/favicon.ico

  Look for a <link> tag with the rel="shortcut icon" attribute

  <link rel="shortcut icon" href="/favicon.ico" />

  Look for a <link> tag with the rel="icon" attribute

  <link rel="icon" href="/favicon.png" />
 */

async function createItem(url: string) {
  const emptyTxt = "--";

  const info = {
    url,
    title: emptyTxt,
    tags: emptyTxt,
    desc: emptyTxt,
    icon: "",
  };

  let originalDoc = "";

  try {
    const res = await fetch(url);
    const doc = await res.text();

    originalDoc = doc;

    const matched = doc.match(TitlteReg);
    if (matched) {
      const { groups } = matched;
      const title = groups ? groups.title : null;

      if (title) {
        info.title = title;
      }
    }

    const keyWordsMatched = doc.match(KeyWordsReg);
    if (keyWordsMatched) {
      const { groups } = keyWordsMatched;
      const tags = groups ? groups.content : null;

      if (tags) {
        info.tags = tags;
      }
    }

    const descMatched = doc.match(descptionReg);
    if (descMatched) {
      const { groups } = descMatched;
      const desc = groups ? groups.content : null;

      if (desc) {
        info.desc = desc;
      }
    }
  } catch (err) {
    console.error(err);
  }

  const iconUrl = await getIcon(url, originalDoc);
  info.icon = iconUrl;

  return info;
}

export default async function Home() {
  const data = await createData(originalUrls);

  return (
    <main className="p-24 flex flex-col gap-8">
      <div>所有的数据</div>

      {data.map((info, idx) => {
        return (
          <div key={idx} className="flex flex-col gap-4 border p-8">
            <div className="flex gap-2">
              <Image className='w-6 h-6' src={info.icon} alt='icon' />
              {info.title}
            </div>
            <div>{info.url}</div>
            <div>{info.tags}</div>
            <div>{info.desc}</div>
          </div>
        );
      })}
    </main>
  );
}
