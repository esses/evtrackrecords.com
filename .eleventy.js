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
      driverString = `<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"><a href="https://instagram.com/${lap.InstagramUsername}">${lap.Driver}</a><a class="text-rose-400"><svg class="inline-block ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg></a></td>`;
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

    if (lap.Event) {
      lapEvent = `<div class="text-gray-500 text-xs">${lap.Event}</div>`;
    } else { 
      lapEvent = "";
    }

    if (lap.ModList) {
      modificationsLink = `<a href="${lap.Modifications}"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-auto" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg></a>`;
    } else { 
      modificationsLink = "";
    }

    // TODO: there has to be a more elegant way of doing this

    return `${driverString}<td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-mono">${lap.LapTime}</td><td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-mono"><div>${lap.Date}</div>${lapEvent}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-mono"><div>${lap.Vehicle}</div>${lapCarName}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-mono">${lapDataLink}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-mono">${lapVideoLink}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-mono">${modificationsLink}</td>`;
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
