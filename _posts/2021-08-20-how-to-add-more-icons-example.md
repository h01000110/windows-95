---
layout: default
title: "Add More Icons"
tags: tag1 icons
---

# <a name="top"></a>Icon How To Page

* [Image Types](#Imagetypes)
* [How To Use Icons](#Howtouseicons)
* [How to Add More Custom Icons](#Addcustomicons)

# <a name="Imagetypes"></a>Image Types

The `<FILENAME>.png` is used for the small icons in the topbar. The `<FILENAME>.ico` image filetype is used for the larger icon that shows up in the post list.

[[Top]](#top)

# <a name="Howtouseicons"></a>How To Use Icons

To use this, add `filetype: <TYPE>` to the top in the [front matter](https://jekyllrb.com/docs/front-matter/) section.

`<TYPE>` can be one of
- `creation`
    - ![large creation icon](/assets/img/creation.ico)
- `image`
    - ![large image icon](/assets/img/image.ico)
- `image2`
    - ![large image2 icon](/assets/img/image2.ico)
- `music`
    - ![large music icon](/assets/img/creation.ico)

If you leave it blank, or don't add `filetype: <TYPE>` to the frontmatter it will default to the text file icon
- ![large file icon](/assets/img/file.ico)

[[Top]](#top)

# <a name="Addcustomicons"></a>How to Add More Custom Icons

I found icons here: [https://win98icons.alexmeub.com/](https://win98icons.alexmeub.com/)

View all the icons and pick one that you want. Make sure it has both a small icon (for the top bar), and a large icon (for the post list) in the viewer. For example, you *could not* use the `hard_disk_drive_pie` icon because it doesn't have a small icon, only a large one.

In our example lets look at one of the already imported icons, the `paint_file` icon (or the creation icon). Using the icon viewer website, you can see it has both a large and small version.

| Image | Small Image | Can you use it?  |
| :-------------- | :--------------: | :-------------: |
| !["hard_disk_drive_pie icon"](https://win98icons.alexmeub.com/icons/png/hard_disk_drive_pie.png) | NONE | *NO* |
| !["large paint_file-4 icon"](/assets/img/creation.ico) | !["small paint_file-4 icon"](/assets/img/creation.png) | **YES** |

<br>

Now you need to download the icons. There's a link to download all icons on the left side of the icon viewer page: it looks like the double program window icon and it is titled **"Download All Icons"**.

Click it and you will be brought to a Google Drive Page. Download the folder you are brought to and un-compress it locally on your computer.

Make sure you get the `<FILENAME>.png` (that is very small) in the `windows98-icon/png` folder and a `<FILENAME>.ico` in the `windows98-icon/ico` folder.

In our example we would grab the `windows98-icon/png/paint_file-0.png` icon (since this is the smallest) and the `windows98-icon/ico/paint_file.ico`.

Now decide on a one word name for it. Rename both your `<FILENAME>.png` and `<FILENAME>.ico` file to your one word name. In our case, we renamed the `paint_file.ico` to `creation.ico` and `paint_file-0.png` to `creation.png`.

Put these newly renamed files in the `assets/img/` folder of the repository.

Next edit the `_includes/post-type-ico-file.html`. Add a new `elsif` statement before the `{% raw %}{% endif %}{% endraw %}` for your files. You can copy/paste the example below and replace `<NAME>` with the name of your file.
```
{% raw %}{% elsif post.filetype == "<NAME>" %}
  {% assign img_src = "/assets/img/<NAME>.ico" %}{% endraw %}
```
In our example, we would add the following since our file names were `creation`.
```
{% raw %}{% elsif post.filetype == "creation" %}
  {% assign img_src = "/assets/img/creation.ico" %}{% endraw %}
```
Next edit the `_includes/post-type-png-file.html`. Add a new `elsif` statement before the `{% raw %}{% endif %}{% endraw %}` for your files. You can copy/paste the example below and replace `<NAME>` with the name of your file.
```
{% raw %}{% elsif page.filetype == "<NAME>" %}
  {% assign img_src = "/assets/img/<NAME>.png" %}{% endraw %}
```
In our example, we would add the following since our file names were `creation`.
```
{% raw %}{% elsif page.filetype == "creation" %}
  {% assign img_src = "/assets/img/creation.png" %}{% endraw %}
```

Now you can add the type `filetype: <NAME>` to your post front matter and the new icon type will show up in the post list and the top bar. In our example, we used the file name of `creation` so we would put `filetype: creation` to see the MS Paint file icon.

[[Top]](#top)
