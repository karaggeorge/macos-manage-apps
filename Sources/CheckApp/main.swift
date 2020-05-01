import Cocoa

guard let bundleId = Array(CommandLine.arguments.dropFirst(1)).first else {
  print("Please specify a bundle identifier")
  exit(1)
}

print(!NSRunningApplication.runningApplications(withBundleIdentifier: bundleId).isEmpty)
