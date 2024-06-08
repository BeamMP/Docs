# 为BeamMP文档做出贡献

BeamMP使用[Material for MkDocs](https://squidfunk.github.io/mkdocs-material)作为其主题。这是一个[MkDocs](https://www.mkdocs.org)的主题。其完整文档可以在其各自的站点找到。

## Getting Started

To help contribute to these docs you can take one of two approaches as set out below:

### 1. 编辑原始Markdown文件

编辑原始Markdown文件是最快的方法，也是快速编辑（例如拼写、语法或新内容片段）的最佳方法。这种方法确实需要事先了解Markdown知识，但是因为您需要了解您的贡献将有何影响。

If this is the approach you wish to take then please follow these steps:

1. 单击您想编辑的页面上的编辑。
2. 将项目分叉（Fork）到您自己的 GitHub 帐户中。
3. Make the changes you see fit.
4. 将您的更改提交（Commit）到您的分支。
5. [在此处](https://github.com/BeamMP/Docs)针对我们的存储库（Repository）提出拉取请求（Pull Request）。

创建拉取请求后，BeamMP模组团队之一将审查您的拉取请求并批准它或请求进行一些更改。如果请求进行更改并且您已完成更改，我们将重新审核您的 Pull 请求。然后，您的更改将合并到存储库中，并作为我们持续集成的一部分自动部署。

### 2. Make edits with live preview

以这种方式编辑我们的文档仍将采用与选项 1 类似的方法，但您能以这种方式预览您的更改。

1. 单击您想编辑的页面上的编辑。
2. 将项目分叉（Fork）到您自己的 GitHub 帐户中。
3. 将项目复制（Clone）到本地。
4. 根据[此处](https://squidfunk.github.io/mkdocs-material/getting-started/)的指南设置MkDocs素材
5. 运行`mkdocs serve`以从您的分叉所在的位置启动实时重新加载的文档服务器。
6. Make the changes that you see fit.
7. 将您的更改提交（Commit）到您的分支。
8. [在此处](https://github.com/BeamMP/Docs)针对我们的存储库（Repository）提出拉取请求（Pull Request）。

## Project layout

```
mkdocs.yml    # The configuration file.
docs/
    index.md  # The documentation homepage.
    ...       # Other markdown pages, images and other files.
```
