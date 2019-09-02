# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "flowing"
  spec.version       = "0.1.0"
  spec.authors       = ["Felipe"]
  spec.email         = ["felipegdas07@gmail.com"]

  spec.summary       = "A simple and fluid theme to web developer portfolio"
  spec.homepage      = "https://felipegs07.github.io/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 2.0.1"
  spec.add_development_dependency "rake", "~> 12.0"
end
