const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
  eleventyConfig.addPassthroughCopy("./src/*.ico");
  eleventyConfig.addPassthroughCopy("./src/*.png");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  // JSON to Lap Time Entry
  eleventyConfig.addNunjucksShortcode("lapEntry", function(lap) {
    let driverString, lapCarName, lapDataLink, lapVideoLink, modificationsLink;
    if (lap.InstagramUsername) {
      driverString = `<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"><a href="https://instagram.com/${lap.InstagramUsername}">${lap.Driver}</a></td>`;
    } else {
      driverString = `<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">${lap.Driver}</td>`;
    }

    if (lap.LapData) {
      lapDataLink = `<a href="${lap.LapData}"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-auto" viewBox="0 0 20 20" fill="currentColor"><path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" /><path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" /><path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" /></svg></a>`;
    } else { 
      lapDataLink = "";
    }

    if (lap.CarName) {
      lapCarName = `<div class="text-gray-500 text-xs">${lap.CarName}</div>`;
    } else {
      lapCarName = "";
    }

    if (lap.LapVideo) {
      lapVideoLink = `<a href="${lap.LapVideo}"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-auto" viewBox="0 0 20 20" fill="currentColor"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" /></svg></a>`;
    } else { 
      lapVideoLink = "";
    }

    if (lap.ModList) {
      modificationsLink = `<a href="${lap.Modifications}"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-auto" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg></a>`;
    } else { 
      modificationsLink = "";
    }

    // TODO: there has to be a more elegant way of doing this

    return `${driverString}<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-mono">${lap.LapTime}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-mono">${lap.Date}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-mono"><div>${lap.Vehicle}</div>${lapCarName}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-mono">${lapDataLink}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-mono">${lapVideoLink}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-mono">${lap.Event}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-mono">${modificationsLink}</td>`;
  });

  // Nunjucks Lap Time Shortcode.
  eleventyConfig.addNunjucksGlobal("year", "2022");
  return {
    dir: {
      input: "src",
      layouts: "_layouts",
      output: "public",
    }
  }
}
