(function ($) {
    "use strict"; 

    const perf = firebase.performance();
            const analytics = firebase.analytics();

            analytics.logEvent('homePage_view');
            console.log('homePage_view event sent');
            $('#navButtonAbout').click(function() {
                analytics.logEvent('navButtonAbout_click');
                console.log('navButtonAbout_click event sent');
            });
            $('#navButtonProjects').click(function() {
                analytics.logEvent('navButtonProjects_click');
                console.log('navButtonProjects_click event sent');
            });
            $('#navButtonContacts').click(function() {
                analytics.logEvent('navButtonContacts_click');
                console.log('navButtonContacts_click event sent');
            });
            $('#linkEmail').click(function() {
                analytics.logEvent('linkEmail_click');
                console.log('linkEmail_click event sent');
            });
            $('#linkLinkednIn').click(function() {
                analytics.logEvent('linkLinkednIn_click');
                console.log('linkLinkednIn_click event sent');
            });
})(jQuery);