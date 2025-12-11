document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('ctaButton');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const backgroundAudio = document.getElementById('background-audio'); 

    function playAudio() {
        if (backgroundAudio) {
            backgroundAudio.play().catch(error => {
                // Autoplay diblokir, tidak masalah karena akan dipicu oleh klik CTA
                console.log("Audio autoplay diblokir:", error);
            });
        }
    }

    // PENTING: Memastikan audio berputar saat tombol CTA diklik
    ctaButton.addEventListener('click', function() {
        playAudio(); 

        feedbackMessage.textContent = 'Mengarahkan ke informasi Rute Pendakian...';
        
        setTimeout(function() {
            const routeSection = document.getElementById('route');
            if (routeSection) {
                routeSection.scrollIntoView({ behavior: 'smooth' });
                feedbackMessage.textContent = 'Temukan jalur terbaik Anda!';
            }
        }, 1500); 
        
        ctaButton.textContent = 'Memuat...';
        
        setTimeout(function() {
            ctaButton.textContent = 'Mulai Petualangan Anda';
        }, 3000); 
    });

    // Coba putar segera saat DOM dimuat
    playAudio(); 
});