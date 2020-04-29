// swift-tools-version:5.1
import PackageDescription

let package = Package(
	name: "macos-launch-application",
	platforms: [
		.macOS(.v10_12)
	],
	products: [
		.executable(
			name: "launch-app",
			targets: [
				"LaunchApp"
			]
		),
    .executable(
			name: "kill-app",
			targets: [
				"KillApp"
			]
		)
	],
	targets: [
		.target(name: "LaunchApp"),
    .target(name: "KillApp")
	]
)