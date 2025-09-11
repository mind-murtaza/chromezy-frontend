#!/bin/bash

# Chromezy Frontend - Docker Development Script
# Convenient commands for Docker-based development

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Show help
show_help() {
    echo "Chromezy Frontend - Docker Development Commands"
    echo ""
    echo "Usage: ./scripts/docker-dev.sh [command]"
    echo ""
    echo "Commands:"
    echo "  start           Start development environment"
    echo "  stop            Stop all services"
    echo "  restart         Restart development environment"
    echo "  build           Build development image"
    echo "  rebuild         Force rebuild development image"
    echo "  logs            Show application logs"
    echo "  shell           Open shell in development container"
    echo "  test            Run tests in container"
    echo "  test-ui         Start Vitest UI"
    echo "  e2e             Run E2E tests"
    echo "  storybook       Start Storybook"
    echo "  prod            Test production build"
    echo "  clean           Clean up containers and volumes"
    echo "  status          Show container status"
    echo "  install         Install dependencies"
    echo "  lint            Run linting"
    echo "  format          Format code"
    echo ""
}

# Check if Docker is running
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        print_error "Docker is not running. Please start Docker and try again."
        exit 1
    fi
}

# Start development environment
start_dev() {
    print_info "Starting Chromezy development environment..."
    check_docker
    
    # Create .env.local if it doesn't exist
    if [ ! -f .env.local ]; then
        print_warning ".env.local not found. Creating from .env.example..."
        cp .env.example .env.local
    fi
    
    docker-compose up -d app
    print_success "Development server started at http://localhost:3000"
    print_info "Use 'docker-compose logs -f app' to view logs"
}

# Stop all services
stop_dev() {
    print_info "Stopping all services..."
    docker-compose down
    print_success "All services stopped"
}

# Restart development environment
restart_dev() {
    print_info "Restarting development environment..."
    stop_dev
    start_dev
}

# Build development image
build_dev() {
    print_info "Building development image..."
    docker-compose build app
    print_success "Development image built"
}

# Force rebuild development image
rebuild_dev() {
    print_info "Force rebuilding development image..."
    docker-compose build --no-cache app
    print_success "Development image rebuilt"
}

# Show logs
show_logs() {
    docker-compose logs -f app
}

# Open shell in container
open_shell() {
    print_info "Opening shell in development container..."
    docker-compose exec app /bin/sh
}

# Run tests
run_tests() {
    print_info "Running tests..."
    docker-compose --profile testing run --rm test
}

# Start Vitest UI
start_test_ui() {
    print_info "Starting Vitest UI at http://localhost:51204..."
    docker-compose --profile testing up -d test-ui
    print_success "Vitest UI started"
}

# Run E2E tests
run_e2e() {
    print_info "Running E2E tests..."
    docker-compose --profile e2e run --rm e2e
}

# Start Storybook
start_storybook() {
    print_info "Starting Storybook at http://localhost:6006..."
    docker-compose --profile storybook up -d storybook
    print_success "Storybook started"
}

# Test production build
test_prod() {
    print_info "Testing production build at http://localhost:3001..."
    docker-compose --profile production up -d prod
    print_success "Production build started"
}

# Clean up
clean_up() {
    print_warning "This will remove all containers, networks, and volumes. Are you sure? (y/N)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        print_info "Cleaning up..."
        docker-compose down -v --remove-orphans
        docker system prune -f
        print_success "Cleanup complete"
    else
        print_info "Cleanup cancelled"
    fi
}

# Show container status
show_status() {
    print_info "Container Status:"
    docker-compose ps
}

# Install dependencies
install_deps() {
    print_info "Installing dependencies..."
    docker-compose run --rm app yarn install
    print_success "Dependencies installed"
}

# Run linting
run_lint() {
    print_info "Running linting..."
    docker-compose run --rm app yarn lint
}

# Format code
format_code() {
    print_info "Formatting code..."
    docker-compose run --rm app yarn format
    print_success "Code formatted"
}

# Main command handler
case "$1" in
    start)
        start_dev
        ;;
    stop)
        stop_dev
        ;;
    restart)
        restart_dev
        ;;
    build)
        build_dev
        ;;
    rebuild)
        rebuild_dev
        ;;
    logs)
        show_logs
        ;;
    shell)
        open_shell
        ;;
    test)
        run_tests
        ;;
    test-ui)
        start_test_ui
        ;;
    e2e)
        run_e2e
        ;;
    storybook)
        start_storybook
        ;;
    prod)
        test_prod
        ;;
    clean)
        clean_up
        ;;
    status)
        show_status
        ;;
    install)
        install_deps
        ;;
    lint)
        run_lint
        ;;
    format)
        format_code
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac
