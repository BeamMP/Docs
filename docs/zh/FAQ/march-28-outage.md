# 2026年3月28日 BeamMP 停机故障常见问题解答（FAQ）

针对 2026 年 3 月 28 日开始且目前仍在持续的BeamMP停机故障的临时常见问题解答（FAQ）。

**最后更新于2026年4月1日**

=== 我需要帮助！我的 BeamMP 启动器无法运行！<br>请尝试重新安装 BeamMP 启动器。具体操作步骤如下：<br><br>1. 访问 [beammp.com](https://beammp.com/)<br>2. 点击 *Download Now（立即下载）*<br>3. 运行安装程序并按照提示进行操作

```
!!! 注意

截至 2026 年 4 月 1 日，Windows Defender SmartScreen 会将该 MSI 安装程序识别为“未知应用”。

若要跳过此警告，请点击 *更多信息*，然后点击 *仍要运行*。
```

=== 我需要帮助！我的授权密钥 (authkey) 失效了！<br><br>截至 2026 年 4 月 1 日，Keymaster 和认证系统处于离线状态。这意味着您的 authkeys 将无法正常工作。若要解决此问题，请按照以下步骤操作：<br><br>1. 打开您的 ``ServerConfig.toml`` 文件，或任何存放服务器配置的地方。<br>2. 将 ``Private`` 设置为 ``true``。设置后应如下所示：``Private = true``。<br>3. 这应该能解决 authkey 的失效问题。

```
!!! 注意

截至 2026 年 4 月 1 日，BeamMP 的认证系统处于离线状态。目前仅支持游客账号（Guest accounts）登录。

请确保您的服务器已开启游客访问权限。
```
