require 'uglifier'
 
File.open("whater.min.js", "w") do |file| 
	file.write Uglifier.compile(File.read("js/tinyDOM.js"))
	file.write Uglifier.compile(File.read("js/isMobile.js"))
    file.write Uglifier.compile(File.read("whater.js"))
end