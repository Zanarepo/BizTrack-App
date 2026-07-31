import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { AppLayout } from '../layouts/AppLayout';
import { ProtectedRoute } from './ProtectedRoute';

// Public Screen Imports
import { Landing } from '../pages/Landing';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { ForgotPassword } from '../pages/ForgotPassword';
import { NotFound } from '../pages/NotFound';
import { DesignSystem } from '../pages/DesignSystem';

// Protected Workspace & Onboarding Screen Imports
import { BusinessOnboarding } from '../pages/BusinessOnboarding';
import { DashboardPlaceholder } from '../pages/DashboardPlaceholder';
import { Settings } from '../pages/Settings';
import { Profile } from '../pages/Profile';
import { Inventory } from '../pages/Inventory';
import { InventoryHistory } from '../pages/InventoryHistory';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Root Public Landing */}
      <Route path="/" element={<Landing />} />
      <Route path="/design-system" element={<DesignSystem />} />

      {/* Authentication Screens (Wrapped in AuthLayout) */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Onboarding Screen for Authenticated Users without a Business */}
        <Route element={<ProtectedRoute requireBusiness={false} />}>
          <Route path="/onboarding" element={<BusinessOnboarding />} />
        </Route>
      </Route>

      {/* Protected Business Workspace (Requires BOTH Authentication and a Registered Business) */}
      <Route element={<ProtectedRoute requireBusiness={true} />}>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardPlaceholder />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory-ledger" element={<InventoryHistory />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>

      {/* Fallback 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
