import { getIconUrl } from "../lib/url"
import "isomorphic-fetch"

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

