import React, { useState, useEffect, useCallback } from 'react';
import { ViewType, ServiceOrder, OrderStatus } from './types';
import { orderService } from './services/orderService';
import Dashboard from './components/Dashboard';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [orders, setOrders] = useState<ServiceOrder[]>([]);
  const [editingOrder, setEditingOrder] = useState<ServiceOrder | null>(null);

  const refreshOrders = useCallback(async () => {
    const fetchedOrders = await orderService.getOrders();
    setOrders(fetchedOrders);
  }, []);

  useEffect(() => {
    refreshOrders();
  }, [refreshOrders]);

  const handleStatusChange = async (id: string, status: OrderStatus) => {
    await orderService.updateStatus(id, status);
    refreshOrders();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir esta ordem de serviço?')) {
      await orderService.deleteOrder(id);
      refreshOrders();
    }
  };

  const handleEdit = (order: ServiceOrder) => {
    setEditingOrder(order);
    setCurrentView('create');
  };

  const handleOrderSaved = () => {
    refreshOrders();
    setEditingOrder(null);
    setCurrentView('list');
  };

  const handleCancel = () => {
    setEditingOrder(null);
    setCurrentView(editingOrder ? 'list' : 'dashboard');
  };

  const handleViewChange = (view: ViewType) => {
    setEditingOrder(null);
    setCurrentView(view);
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar currentView={currentView} setView={handleViewChange} />
      
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="bg-white border-b border-slate-200 px-8 py-4 sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-800">
              {currentView === 'dashboard' && 'Dashboard de Manutenção'}
              {currentView === 'create' && (editingOrder ? `Editando OS: ${editingOrder.id}` : 'Nova Ordem de Serviço')}
              {currentView === 'list' && 'Gestão de Ordens'}
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-500 font-medium">
                {new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
          </div>
        </header>

        <div className="p-8">
          {currentView === 'dashboard' && (
            <Dashboard orders={orders} onNavigate={handleViewChange} />
          )}
          {currentView === 'create' && (
            <OrderForm 
              onSuccess={handleOrderSaved} 
              onCancel={handleCancel} 
              editingOrder={editingOrder || undefined}
            />
          )}
          {currentView === 'list' && (
            <OrderList 
              orders={orders} 
              onStatusChange={handleStatusChange} 
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
