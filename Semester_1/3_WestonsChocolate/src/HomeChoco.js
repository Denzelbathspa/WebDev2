document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    
    sections.forEach((section) => {
        const header = section.querySelector("h1");
        const content = section.querySelector(".content");
        
        // Initially hide the content
        content.style.maxHeight = "0";
        
        // Add a click event listener to toggle the visibility on header click
        header.addEventListener("click", function () {
            toggleSection(content);
        });
    });

    // Function to toggle section content visibility
    function toggleSection(content) {
        if (content) { // Ensure content exists
            const isExpanded = content.style.maxHeight !== "0px";
            content.style.maxHeight = isExpanded ? "0" : content.scrollHeight + "px";
        }
    }

    // Add click event listeners for the navigation links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            // Get the target section from the data attribute
            const targetId = link.getAttribute("data-target");

            if (targetId) {
                e.preventDefault(); // Prevent default anchor behavior
                
                const targetSection = document.querySelector(`#${targetId}`);
                const targetContent = targetSection.querySelector(".content");

                // Scroll to the section smoothly
                targetSection.scrollIntoView({ behavior: "smooth" });

                // Toggle the content for the clicked section
                toggleSection(targetContent);
            } else {
                // If there's no data-target, allow the link to navigate
                window.location.href = link.getAttribute("href");
            }
        });
    });
});
