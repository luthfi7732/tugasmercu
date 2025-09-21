import React, { useEffect } from 'react';

const Admin = () => {
  useEffect(() => {
    // Load Netlify CMS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/netlify-cms-app@2.15.72/dist/netlify-cms-app.js';
    script.async = true;
    document.head.appendChild(script);

    // Load Netlify Identity
    const identityScript = document.createElement('script');
    identityScript.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
    identityScript.async = true;
    document.head.appendChild(identityScript);

    // Initialize Netlify CMS when scripts are loaded
    script.onload = () => {
      if (window.netlifyCms) {
        window.netlifyCms.init({
          config: {
            backend: {
              name: 'git-gateway',
              branch: 'master'
            },
            media_folder: 'static/uploads',
            public_folder: '/uploads',
            site_url: window.location.origin,
            display_url: window.location.origin,
            logo_url: `${window.location.origin}/logo.png`,
            publish_mode: 'editorial_workflow',
            collections: [
              // Collections configuration will be loaded from config.yml
            ]
          }
        });
      }
    };

    // Cleanup
    return () => {
      document.head.removeChild(script);
      if (document.head.contains(identityScript)) {
        document.head.removeChild(identityScript);
      }
    };
  }, []);

  return (
    <div>
      <div id="nc-root"></div>
      <style jsx>{`
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
};

export default Admin;
