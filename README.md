# hBar lightweight announcement bar

An Announcement Bar that is lightweight and based on tailwindcss

The announcement bar uses native methods to make the library lightweight so that it can be loaded quickly.

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

_to come_ please PR...

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

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
