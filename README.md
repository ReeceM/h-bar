# h-bar lightweight announcement bar

An Announcement Banner that is lightweight and based on tailwindcss for the styling

<h1 align="center">
<br>
  <img src="https://raw.githubusercontent.com/ReeceM/h-bar/master/docs/h-bar.png" alt="h-bar announcements" width="170">
  <br>
    <br>
    h-bar Announcement banner
  <br>
</h1>

The announcement bar uses native methods to make the library lightweight so that it can be loaded quickly, bar the webpack stuff.

**Note**
The initial version makes use of the WordPress API to be able to get the latest post.

i.e. it expects a json structure like so:
From a url like `http://blog.example.com/wp-json/wp/v2/posts?per_page=1&_fields=id,title,link`
```json
[
    {
        "id": 175,
        "link": "https:\/\/blog.example.com\/how-to-hunt-a-vole\/",
        "title": {
            "rendered": "How To Hunt A Vole"
        }
    }
]
```

I plan to add more options and a parser callback that can be defined to extract a standard format.

## Installation

You can install the package via npm:

```bash
npm i @reecem/hBar
```

Or use jsDelivr:
```html
    ...
    <script src"https://cdn.jsdelivr.net/npm/@reecem/hBar@latest/dist/hBar.js"></script>
    ...
```

> If you are customising the styling and overriding it with your own styling then you will also need an instance of your css or a tailwindcss file installed as only the classes needed are packaged with h-bar

## Usage

You can import it directly into your javascript app or use it in the html.

```html
<script src="../hBar.js"></script>
<script>
    hBar.init({
        url: "http://blog.example.com/wp-json/wp/v2/posts?per_page=1&_fields=id,excerpt,title,link",
        secondaryLinks: [
            {
                title: "Docs",
                link: "http:://docs.example.com"
            },
            {
                title: "Support",
                link: "http://help.example.com"
            }
        ],
        theme: "blue",
    });

    hBar.fetchData()
</script>
```

### Testing

_to come_ please make a PR if you know how to do it on JS.

### Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

### Security

If you discover any security related issues, please email zsh.rce@gmail.com instead of using the issue tracker.

## Credits

- [ReeceM](https://github.com/ReeceM)
- [All Contributors](../../contributors)

## Support

<a href="https://www.buymeacoffee.com/ReeceM" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/S6S7UQ66)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
