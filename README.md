# JS Lara Meta
## Install
`npm install lara-meta`

## Add meta to head
```blade
<meta name="env" content="{{ config('app.env') }}">
<meta name="csrf-token" content="{{ csrf_token() }}">
```
## Usage
```JS
Meta.env() //Get env
Meta.csrfToken() //Get csrf token
Meta.content(name) //Get meta content by name
```