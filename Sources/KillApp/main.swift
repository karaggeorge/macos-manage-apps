import Cocoa

guard let bundleId = Array(CommandLine.arguments.dropFirst(1)).first else {
  print("Please provide the bundle identifier")
  exit(1)
}

NSRunningApplication.runningApplications(withBundleIdentifier: bundleId).first?.terminate()
