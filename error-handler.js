/**
 * 404 Error Handler for Local Development
 * This script handles 404 errors when using local development servers
 * that don't support .htaccess files (like Live Server, Browser-Sync, etc.)
 */

(function () {
  "use strict";

  // Debug mode - set to true to see console logs
  const DEBUG = true;

  function log(message) {
    if (DEBUG) {
      console.log("[404 Handler]:", message);
    }
  }

  // Check if the current page is a 404 error
  function is404Error() {
    const currentPath = window.location.pathname;
    log("Checking path: " + currentPath);

    // First, check if this is a known page
    if (isKnownPage(currentPath)) {
      log("This is a known page, not a 404");
      return false;
    }

    // Check for common 404 indicators in the page
    const bodyText = document.body.innerText.toLowerCase();
    const title = document.title.toLowerCase();
    const htmlContent = document.documentElement.innerHTML.toLowerCase();

    const has404Indicators =
      bodyText.includes("404") ||
      bodyText.includes("not found") ||
      bodyText.includes("page could not be found") ||
      bodyText.includes("file not found") ||
      bodyText.includes("cannot be found") ||
      title.includes("404") ||
      title.includes("not found") ||
      htmlContent.includes("404") ||
      htmlContent.includes("not found");

    if (has404Indicators) {
      log("Found 404 indicators in page content");
      return true;
    }

    // Check if the page has very little content (typical of 404 pages)
    const bodyContent = document.body.innerText.trim();
    if (bodyContent.length < 100) {
      log("Page has very little content, likely a 404");
      return true;
    }

    // Check if we're on a path that doesn't exist
    log("Path not found in known pages, treating as 404");
    return true;
  }

  // List of known pages in your website
  function isKnownPage(pathname) {
    const knownPages = [
      "/",
      "/index.html",
      "/about.html",
      "/classes.html",
      "/contacts.html",
      "/blog.html",
      "/events.html",
      "/schedule.html",
      "/teachers.html",
      "/search-results.html",
      "/class-single.html",
      "/class-single-acca.html",
      "/class-single-cfa.html",
      "/class-single-cma.html",
      "/class-single-cpa.html",
      "/class-single-dipifrs.html",
      "/class-single-esg.html",
      "/class-single-frm.html",
      "/class-single-global-investment-banking.html",
      "/class-single-investment-banking.html",
      "/event-single.html",
      "/post.html",
      "/teacher-single.html",
      "/error.html",
    ];

    const isKnown =
      knownPages.includes(pathname) || knownPages.includes(pathname + ".html");
    log("Is known page: " + isKnown + " for path: " + pathname);
    return isKnown;
  }

  // Redirect to error page
  function redirectToErrorPage() {
    const currentPath = window.location.pathname;

    // Only redirect if we're not already on the error page
    if (currentPath !== "/error.html" && !currentPath.endsWith("error.html")) {
      log("Redirecting to error.html from: " + currentPath);
      window.location.href = "/error.html";
    } else {
      log("Already on error page, not redirecting");
    }
  }

  // Main function to check and redirect
  function checkAndRedirect() {
    log("Checking for 404 error...");
    if (is404Error()) {
      log("404 detected, redirecting...");
      redirectToErrorPage();
    } else {
      log("No 404 detected");
    }
  }

  // Check for 404 error when page loads
  if (document.readyState === "loading") {
    log("Page still loading, waiting for DOMContentLoaded");
    document.addEventListener("DOMContentLoaded", function () {
      log("DOMContentLoaded fired");
      // Small delay to ensure page is fully loaded
      setTimeout(checkAndRedirect, 100);
    });
  } else {
    log("Page already loaded, checking immediately");
    // Small delay to ensure page is fully loaded
    setTimeout(checkAndRedirect, 100);
  }

  // Also check when the page becomes visible (for SPA-like behavior)
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) {
      log("Page became visible, checking for 404");
      setTimeout(checkAndRedirect, 100);
    }
  });

  // Additional check after a longer delay to catch any late-loading content
  setTimeout(function () {
    log("Delayed check for 404");
    checkAndRedirect();
  }, 1000);
})();
