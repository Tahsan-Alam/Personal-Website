/*
 * Shared progressive enhancements for the static portfolio.
 * Navigation, email, project links, and image links also work without JavaScript.
 */

"use strict";

/** Updates every footer year using the visitor's current calendar year. */
function updateCopyrightYear() {
    const year = new Date().getFullYear();

    for (const element of document.querySelectorAll("[data-current-year]")) {
        element.textContent = year;
    }
}

/**
 * Connects image links to the native dialog when the browser supports it.
 * Pages without an image viewer, such as Contact, are left alone.
 */
function initializeImageViewer() {
    const dialog = document.querySelector("#image-viewer");

    if (!dialog || typeof dialog.showModal !== "function") {
        return;
    }

    const image = dialog.querySelector(".viewer-image");
    const title = dialog.querySelector("#viewer-title");
    const originalLink = dialog.querySelector(".viewer-original");
    const closeButton = dialog.querySelector(".viewer-close");
    let openingLink = null;

    /** Copies the selected image and its description into the dialog, then opens it. */
    function openImageViewer(link) {
        const sourceImage = link.querySelector("img");

        openingLink = link;
        image.src = link.href;
        image.alt = sourceImage.alt;
        title.textContent = link.dataset.imageTitle;
        originalLink.href = link.href;

        dialog.showModal();
        document.body.classList.add("viewer-open");
        closeButton.focus();
    }

    /** Closes the dialog; the close event handles scrolling and focus restoration. */
    function closeImageViewer() {
        dialog.close();
    }

    /** Restores page scrolling and returns keyboard focus to the image that opened it. */
    function restorePageAfterClose() {
        document.body.classList.remove("viewer-open");

        if (openingLink) {
            openingLink.focus({ preventScroll: true });
        }
    }

    /** Opens ordinary clicks in the viewer while preserving modified-click link behavior. */
    function handleImageClick(event) {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) {
            return;
        }

        event.preventDefault();
        openImageViewer(event.currentTarget);
    }

    /** Closes only when a click is outside the dialog's visible rectangle. */
    function handleBackdropClick(event) {
        if (event.target !== dialog) {
            return;
        }

        const bounds = dialog.getBoundingClientRect();
        const outsideDialog = event.clientX < bounds.left || event.clientX > bounds.right
            || event.clientY < bounds.top || event.clientY > bounds.bottom;

        if (outsideDialog) {
            closeImageViewer();
        }
    }

    for (const link of document.querySelectorAll(".image-trigger")) {
        link.setAttribute("aria-haspopup", "dialog");
        link.addEventListener("click", handleImageClick);
    }

    closeButton.addEventListener("click", closeImageViewer);
    dialog.addEventListener("click", handleBackdropClick);
    dialog.addEventListener("close", restorePageAfterClose);
}

// The deferred script executes after HTML parsing, so the elements already exist.
updateCopyrightYear();
initializeImageViewer();
