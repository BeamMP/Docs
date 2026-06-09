# 服务器手册

# 环境

服务器受各种外部参数状态的影响：

-  "Resources" 文件夹
- ENV（进程环境）
- 命令行参数
- ServerConfig.toml 文件
- 工作目录

## Resources 文件夹

resources 文件夹会在服务器启动时创建，同时会生成“Client”和“Server”子目录。“Server”子目录可以包含多个文件夹，每个文件夹至少包含一个 `.lua` 文件。位于插件顶层目录的 `.lua` 文件在修改时会被热加载。“Client”子目录仅接受 *&nbsp;`.zip` 文件，这些文件在服务器启动时加载，并假设在运行时不会发生变化。*

## ENV

### 一般设置

从服务器 v3.2.0 版本开始，BeamMP 服务器支持环境变量，这些变量会 **覆盖** ServerConfig.toml 中的设置。所有位于“General”类别/部分的 ServerConfig 变量都是 PascalCase，而环境变量则为 ALL_CAPS，并以 `BEAMMP_` 为前缀。例如，`MaxPlayers` 设置转换为全大写为 `MAX_PLAYERS`（注意每个新单词前的 `_`），加上前缀后变为 `BEAMMP_MAX_PLAYERS`。所有“General”设置都遵循此格式。现有的 ENV 变量如下：

- `BEAMMP_DEBUG`
- `BEAMMP_PRIVATE`
- `BEAMMP_PORT`
- `BEAMMP_MAX_CARS`
- `BEAMMP_MAX_PLAYERS`
- `BEAMMP_MAP`
- `BEAMMP_NAME`
- `BEAMMP_DESCRIPTION`
- `BEAMMP_TAGS`
- `BEAMMP_RESOURCE_FOLDER`
- `BEAMMP_AUTH_KEY`
- `BEAMMP_LOG_CHAT`

任何对应于配置参数的环境变量，如果参数类型为字符串或数字，则环境变量必须为字符串，例如 `BEAMMP_NAME="Cool Server"`、`BEAMMP_NAME=Server1`、`BEAMMP_PORT=12345`。对应于布尔类型（true/false、on/off）的配置参数的环境变量必须为 `true` 或 `1`（都表示开启），其他任意值表示关闭。

### 服务器提供者或服务提供相关的设置

这些环境变量允许托管提供者（以及拥有更多服务器的其他用户，此处称为‘提供者’）覆盖某些特定于提供者的设置。

#### `BEAMMP_PROVIDER_PORT_ENV` (在v3.3.0版本)

当设置为非空字符串时，这会用另一个变量替换 `BEAMMP_PORT` 变量，以便从现有的 ENV 中读取该变量。例如，Pterodactyl 可能会将 `SERVER_PORT` 作为 ENV 暴露。要在 BeamMP-Server 中使用它，你需要这样设置 `BEAMMP_PORT=${SERVER_PORT}`，这有点繁琐。

现在，你可以使用 `BEAMMP_PROVIDER_PORT_ENV="SERVER_PORT"`，这样 BeamMP-Server 就会从 `SERVER_PORT` ENV 变量中读取端口。

#### `BEAMMP_PROVIDER_DISABLE_CONFIG` (在v3.3.0版本)

如果设置为 `1` 或 `true`，则 `ServerConfig.toml` 将 **不被生成**，如果存在也 **不会被读取**。服务器必须设置 `BEAMMP_AUTH_KEY` 才能正常运行。

#### `BEAMMP_PROVIDER_UPDATE_MESSAGE` (在v3.2.2版本)

当设置为非空字符串时，这会替换整个更新消息，默认消息为“NEW VERSION IS OUT! Please update to the new...” 等。你提供的更新消息中 **必须**包含 `{}`，服务器会将其替换为新版本号。例如，你的更新消息可以如下所示：

```sh
BEAMMP_PROVIDER_UPDATE_MESSAGE="BeamMP-Server 的新版本已发布：{}！请按照此更新指南操作：https://example.com/update-guide"
```

这将生成如下更新消息

```
BeamMP-Server 的新版本已发布：v5.0.2！请按照此更新指南操作：https://example.com/update-guide
```

请务必向用户明确说明他们需要更新，并解释如何进行更新。

## 命令行参数

使用 `--help` 参数运行 BeamMP 服务器以了解更多信息。例如：`./BeamMP-Server --help`。

## ServerConfig.toml

该文件会在首次启动时生成。文件内的注释是了解每个设置作用的最新方式。

## 工作目录

服务器的工作目录，而不是服务器可执行文件的位置，决定了 ServerConfig.toml、服务器日志文件和 Resources 文件夹的生成位置。

# 限制

以下限制在 BeamMP 后端中被强制执行，这会影响服务器：

- Name 的长度限制为 250 个字符
- 描述限制为 1000 个字符
- 地图名称限制为 100 个字符
- 标签限制为 100 个字符
