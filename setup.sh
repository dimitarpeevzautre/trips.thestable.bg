#!/bin/bash
# Setup script for trips.thestable.bg development environment

echo "🏔️  Setting up The Stable development environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2)
REQUIRED_VERSION="18.0.0"
if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then
    echo "❌ Node.js version $NODE_VERSION is not supported. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js version $NODE_VERSION is supported"

# Install npm dependencies
echo "📦 Installing npm dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install npm dependencies"
    exit 1
fi

# Build CSS
echo "🎨 Building CSS..."
npm run build-css-prod
if [ $? -ne 0 ]; then
    echo "❌ Failed to build CSS"
    exit 1
fi

# Set up git hooks
echo "🔧 Setting up git hooks..."
git config core.hooksPath .githooks
if [ $? -eq 0 ]; then
    echo "✅ Git hooks configured"
else
    echo "⚠️  Could not set up git hooks (this is optional)"
fi

# Check if bundle is available for Jekyll
if command -v bundle &> /dev/null; then
    echo "✅ Ruby Bundle is available"
    echo "💎 You can run 'bundle exec jekyll serve' for local development"
else
    echo "⚠️  Ruby Bundle is not available. Jekyll local development won't work."
    echo "   Install Ruby 3.1+ and run 'bundle install' to enable Jekyll development."
fi

echo ""
echo "🎉 Setup complete! Next steps:"
echo "   - Run 'npm run dev' to start CSS development mode"
echo "   - Run 'npm run format' to format your code"
echo "   - Run 'npm run build' to build for production"
echo "   - Edit files in _trips/, _layouts/, and _includes/"
echo ""
echo "📚 Read DEVELOPMENT.md for more information"
echo "🤖 Check .github/copilot-instructions.md for AI assistance guidelines"