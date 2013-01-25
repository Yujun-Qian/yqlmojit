YUI.add('top_frame', function (Y, NAME) {

    Y.namespace('mojito.controllers')[NAME] = {

        index: function (ac) {
            // Use aliases to params addon
            // if they exist.
            if (ac.params.hasOwnProperty('url')) {
                var q = ac.params.url('q') || 'muppet',
                    page = (ac.params.url('page') || 0) / 1,
                    count = (ac.params.url('size') || 20) / 1;
            } else {
                var q = ac.params.getFromUrl('q') || 'muppet',
                    page = (ac.params.getFromUrl('page') || 0) / 1,
                    count = (ac.params.getFromUrl('count') || 20) / 1;
            }
            var start = page * count;
            var model = ac.models.get('top_frameModelFoo');
            model.search(q, start, count, function (photos) {
                ac.done({
                    photos: photos,
                    page: page,
                    count: count,
                    start: start
                });
            });
        }
    };
}, '0.0.1', {
    requires: [
        'mojito-models-addon', 'mojito-params-addon',
        'top_frameModelFoo']
});