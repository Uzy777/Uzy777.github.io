#!/usr/bin/env bash
set -e

BRANCH=$(git branch --show-current)

if [ "$BRANCH" != "main" ]; then
  echo "❌ You are on branch '$BRANCH'. Switch to 'main' to deploy."
  exit 1
fi

echo "🚀 Building React app..."

cd app
npm run build

echo "📄 Creating SPA fallback 404.html..."
cp dist/index.html dist/404.html

cd ..

echo "🧹 Cleaning old build files..."

find . -mindepth 1 -maxdepth 1 \
  ! -name '.git' \
  ! -name 'app' \
  ! -name 'deploy.sh' \
  ! -name 'CNAME' \
  -exec rm -rf {} +

echo "📦 Copying new build to root..."

cp -r app/dist/* .

git add .
git commit -m "Deploy site" || echo "No changes to commit"
git push

echo "✅ Deployment complete!"
