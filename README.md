# Hackergarden

Build the site and make it available on a local server:

```
bundle exec jekyll serve
```

## Site structure

```json
{
    site {
        authors : [
            {
                short_name: string,
                position: string,
                content: markdown,
                title: string,
                date: string,
                url: string
            }]
        meetups : [
            {
                title: string,
                date: string,
                url: string
            }]
         posts : [
            {
                title: string,
                date: string,
                url: string
            }]
        }
}
```

## Page structure

- Home
- About
- Projects
- Meetups
- Code
- Veggies

## Visit the site in production:

https://codilot.github.io/hackergarden/
