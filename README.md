# bitbar-top-ten

## Usage

1. 安装 [BitBar](https://github.com/matryer/bitbar/releases)
2. git clone 到本地
3. `npm install` 安装依赖，保存当前项目路径（比如我的是`/Users/gdp/Code/me/bitbar-top-ten`）
4. 运行 BitBar，选择一个文件夹作为 `Plugin Folder`
5. 进入上一步选择的 `Plugin Folder`，执行`ln -s {source_path.index.js} topten.30m.js`。其中`{soucce_path}` 用之前的项目路径替换。`topten` 随意取，`30m` 表示每30分钟更新一次。
6. 执行`./topten.30m.js`。

以上过程可能需要 `chimed +x filename`

## TODO

1. 未读消息刷新
