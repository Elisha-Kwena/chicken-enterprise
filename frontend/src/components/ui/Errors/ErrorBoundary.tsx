import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, ErrorBoundaryState> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log errorInfo to an error reporting service here
    console.error(error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-red-900 p-8">
          <h1 className="text-3xl font-bold mb-4">Something went wrong.</h1>
          <pre className="mb-4 bg-red-100 p-4 rounded text-sm max-w-xl overflow-x-auto">{this.state.error?.message}</pre>
          <button onClick={this.handleReload} className="px-4 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700 transition">Reload Page</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary; 