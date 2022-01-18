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
            $('#navButtonEvents').click(function() {
                analytics.logEvent('navButtonProjectsEvents_click');
                console.log('navButtonProjectsEvents_click event sent');
            });
            $('#navButtonContacts').click(function() {
                analytics.logEvent('navButtonContacts_click');
                console.log('navButtonContacts_click event sent');
            });
            $('#btnAbout').click(function() {
                analytics.logEvent('buttonAbout_click');
                console.log('buttonAbout_click event sent');
            });
            $('#btnCV').click(function() {
                analytics.logEvent('buttonCV_click');
                console.log('buttonCV_click event sent');
            });
            $('#linkTelegram').click(function() {
                analytics.logEvent('linkTelegram_click');
                console.log('linkTelegram_click event sent');
            });
            $('#linkEmail').click(function() {
                analytics.logEvent('linkEmail_click');
                console.log('linkEmail_click event sent');
            });
            $('#linkStackOverflow').click(function() {
                analytics.logEvent('linkStackOverflow_click');
                console.log('linkStackOverflow_click event sent');
            });
            $('#linkGitHub').click(function() {
                analytics.logEvent('linkGitHub_click');
                console.log('linkGitHub_click event sent');
            });
            $('#linkFacebook').click(function() {
                analytics.logEvent('linkFacebook_click');
                console.log('linkFacebook_click event sent');
            });
            $('#linkLinkednIn').click(function() {
                analytics.logEvent('linkLinkednIn_click');
                console.log('linkLinkednIn_click event sent');
            });
})(jQuery);