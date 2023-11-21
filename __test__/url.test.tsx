import {
  getIconUrl,
  getSiteDesc,
  getSiteTitle,
  getSiteKeyword,
} from "../lib/url"
import "isomorphic-fetch"
import { music163Doc } from "./mock"

// ref regex101 https://regex101.com/

// ref https://stackoverflow.com/questions/36069731/how-to-unit-test-api-calls-with-mocked-fetch-in-react-native-with-jest

test("getIconUrl baidu", async () => {
  const url = "https://www.baidu.com/"
  const value = await getIconUrl(url)
  expect(value).toBe("https://www.baidu.com/favicon.ico")
})

test("getIconUrl solidot", async () => {
  const url = "https://www.solidot.org/"
  const value = await getIconUrl(url)
  expect(value).toBe("https://www.solidot.org/favicon.ico")
})

test("getIconUrl wechat", async () => {
  const url = "https://wx2.qq.com/"
  const value = await getIconUrl(url)
  expect(value).toBe("https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico")
})

test("getIconUrl zhipin", async () => {
  const url = "https://www.zhipin.com/"
  const value = await getIconUrl(url)
  expect(value).toBe("https://www.zhipin.com/favicon.ico")
})

test("getSiteDesc 163.music",async () => {
  const value = getSiteDesc(music163Doc)
  expect(value).toBe("网易云音乐是一款专注于发现与分享的音乐产品，依托专业音乐人、DJ、好友推荐及社交功能，为用户打造全新的音乐生活。")
})

test("getSiteTitle 163.music",async () => {
  const value = getSiteTitle(music163Doc)
  expect(value).toBe("网易云音乐")
})

test("getSiteKeyword 163.music",async () => {
  const value = getSiteKeyword(music163Doc)
  expect(value).toBe("网易云音乐，音乐，播放器，网易，下载，播放，DJ，免费，明星，精选，歌单，识别音乐，收藏，分享音乐，音乐互动，高音质，320K，音乐社交，官网，music.163.com")
})
