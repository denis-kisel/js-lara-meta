class Meta
{
    static env() {
        return Meta.content('env');
    }

    static csrfToken() {
        return Meta.content('csrf-token');
    }

    static content(name)
    {
        return $('meta[name="' + name + '"]').attr('content');
    }
}