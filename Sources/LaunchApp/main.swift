import Cocoa

extension FileHandle: TextOutputStream {
  public func write(_ string: String) {
    write(string.data(using: .utf8)!)
  }
}

guard let bundleId = Array(CommandLine.arguments.dropFirst(1)).first else {
  print("Please specify a bundle identifier")
  exit(1)
}

let url = NSWorkspace.shared.urlForApplication(withBundleIdentifier: bundleId)

guard let appUrl = url else {
  print("No app found for given bundle identifier")
  exit(1)
}

if #available(macOS 10.15, *) {
  let configuration = NSWorkspace.OpenConfiguration()
  NSWorkspace.shared.openApplication(at: appUrl, configuration: configuration) { _, error in
    guard error == nil else {
      print(error.localizedDescription)
      exit(1)
    }
  }
} else {
  _ = try? NSWorkspace.shared.launchApplication(at: appUrl, configuration: [:])
}
