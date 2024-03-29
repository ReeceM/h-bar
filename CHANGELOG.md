# Changelog

All notable changes to `h-bar` will be documented in this file.
## [Unreleased]

- See the comparison on GitHub

## [2.0.3] - 2022-12-22
### Fixed
- margin on the dismiss button caused issues when on mobile. #37, #30 @mariusa

## [2.0.2] - 2022-12-22
### Fixed
- `customStyles` prop was ignored in version change

## [2.0.1] - 2022-12-21
### Added
- Templating for custom styles.
- Move the original default banner to separate class

### Changed
- Initializing the class has changed in the values passed
- Changed to make banner optional #31 @mariusa

# [1.1.0] - 2020-05-15

***Changes***

- Only headers can be passed to the fetch function configs.
    - only doing get requests basically.
- changed the names of the options values to not be so odd

__FIX__

- the fetch options config cleared all defaults

# [1.0.1] - 2020-04-09

__FIX__

The styling broke in firefox as sizing was missing the prefix.

# [1.0.0] - 2020-03-13

First initial major version of h-bar :)

This has kinda the base features for the first version.

See previous versions for the features to this point.

# [0.3.0] - 2020-03-13

***FEATURE***
- [110bab7] Add `dismissible` to the init function.
- [417484c] Add functionality to the main code to be able to dismiss the banner
- [79c4e6b] Option to be able to store it locally for a period of time in localStorage

## 0.2.1 - 2020-02-28

***FEATURES***

- [a89fcc0] Adds more themes for the styling
- [dc588ce] Gives the link an svg chevron for pretty

## [0.2.0] - 2020-02-23

This has a fix for the fact I mixed up the values compared in the wordpress passer.

***Fixes***

- [164e82d] FIX: the normalise for destructured object for the wordpress API

***Features***

- [02d0b38] Add the option to define/override the default container element id that is used.

## [0.1.0] - 2020-02-18

***Features***

- adds the ability to have custom parsers in the `parser` section of `init()` [#3] [edee6d8]

### General

Update the example file to show usage.

Also update the readme.

## 0.0.x - initial releases

Before this the documented changes are vague cause it was the initial flesh of the package.

[Unreleased]: https://github.com/reecem/h-bar/compare/v2.0.3...HEAD
[2.0.3]: https://github.com/reecem/h-bar/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/reecem/h-bar/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/reecem/h-bar/compare/v1.0.1...v2.0.1
[1.1.0]: https://github.com/reecem/h-bar/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/reecem/h-bar/compare/v0.3.0...v1.0.1
[0.3.0]: https://github.com/reecem/h-bar/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/reecem/h-bar/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/reecem/h-bar/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/reecem/h-bar/releases/tag/v0.1.0
