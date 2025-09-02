import { createContext, useContext } from 'react';
import { useSnackbar } from '../../hooks/useSnackbar';
import Snackbar from './Snackbar';

const SnackbarContext = createContext();

export const useSnackbarContext = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbarContext must be used within a SnackbarProvider');
  }
  return context;
};

export default function SnackbarProvider({ children }) {
  const snackbarMethods = useSnackbar();

  return (
    <SnackbarContext.Provider value={snackbarMethods}>
      {children}
      <div className="snackbar-container">
        {snackbarMethods.snackbars.map((snackbar) => (
          <Snackbar
            key={snackbar.id}
            message={snackbar.message}
            type={snackbar.type}
            duration={snackbar.duration}
            isVisible={snackbar.isVisible}
            onClose={() => snackbarMethods.hideSnackbar(snackbar.id)}
          />
        ))}
      </div>
    </SnackbarContext.Provider>
  );
}
