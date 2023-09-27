'use client'

import React from 'react';

function Tawk() {
  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();

  return (
    <script type="text/javascript">
      {(function () {
        var s1 = document.createElement('script'),
          s0 = document.getElementsByTagName('script')[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/64a9cf4494cf5d49dc625f15/1h4rl3aek';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      })()}
    </script>
  );
}

export default Tawk;
