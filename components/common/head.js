import React from 'react';

export default function CustomHead() {
	return (
		<>
			<script
				async
				src='https://www.googletagmanager.com/gtag/js?id=G-EWN7774XKX'
			></script>
			<script
				dangerouslySetInnerHTML={{
					__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EWN7774XKX');
        `,
				}}
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `
          (function() {
            const theme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', theme);
          })();
        `,
				}}
			/>
		</>
	);
}
