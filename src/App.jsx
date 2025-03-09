import React from "react";
import "./App.css";

function App() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div>
          <div className="logo">⚙️ Payrole</div>
          <div className="nav-menu">
            <a href="#" className="nav-item active">Home</a>
            <a href="#" className="nav-item">Contacts</a>
            <a href="#" className="nav-item">Documents</a>
            <a href="#" className="nav-item">Invoices</a>
            <a href="#" className="nav-item">Transactions</a>
            <a href="#" className="nav-item">Insurance</a>
            <a href="#" className="nav-item">Cards</a>
          </div>
        </div>
        <div className="settings">⚙️ Settings</div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="greeting">
            <h1>Good morning, Chris</h1>
            <p>Here’s your dashboard overview.</p>
          </div>
          <div className="header-actions">
            <button className="button">Create A Contract</button>
            <div className="profile">
              <div className="avatar-placeholder">CM</div>
              <div className="profile-info">
                <p>Chris MigueL</p>
                <small>Freelancer</small>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats">
          <div className="card">
            <h4>Total Outstanding</h4>
            <p className="amount">$58,764.25</p>
          </div>
          <div className="card">
            <h4>Upcoming Payment</h4>
            <p className="date">April 1st, 2022</p>
          </div>
          <div className="card">
            <h4>Withdraw Method</h4>
            <div className="withdraw-method">
              <p>PayPal</p>
              <span className="status connected">Connected</span>
            </div>
          </div>
        </div>

        {/* Payment History & Transaction History */}
        <div className="main-widgets">
          <div className="payment-history card">
            <h4>Payment History</h4>
            <p className="amount">$12,135.69 <span className="positive">+23%</span></p>
            <small>vs last month</small>
            <div className="graph-placeholder">
              Graph Here 📈
            </div>
          </div>

          <div className="transaction-history card">
            <div className="transaction-header">
              <h4>Transaction History</h4>
              <a href="#">See All</a>
            </div>
            <div className="transaction-list">
              <div className="transaction-item">
                <div className="profile">
                  <div className="avatar-placeholder">CF</div>
                  <div>
                    <p>Cody Fisher</p>
                    <small>Louis Vuitton</small>
                  </div>
                </div>
                <p>$1,545.27</p>
              </div>
              <div className="transaction-item">
                <div className="profile">
                  <div className="avatar-placeholder">EH</div>
                  <div>
                    <p>Esther Howard</p>
                    <small>Starbucks</small>
                  </div>
                </div>
                <p>$1,545.27</p>
              </div>
              <div className="transaction-item">
                <div className="profile">
                  <div className="avatar-placeholder">WW</div>
                  <div>
                    <p>Wade Warren</p>
                    <small>Louis Vuitton</small>
                  </div>
                </div>
                <p>$1,540.27</p>
              </div>
              <div className="transaction-item">
                <div className="profile">
                  <div className="avatar-placeholder">BS</div>
                  <div>
                    <p>Brooklyn Simmons</p>
                    <small>Berry</small>
                  </div>
                </div>
                <p>$1,540.27</p>
              </div>
              <div className="transaction-item">
                <div className="profile">
                  <div className="avatar-placeholder">RE</div>
                  <div>
                    <p>Ralph Edwards</p>
                    <small>IBM</small>
                  </div>
                </div>
                <p>$1,545.27</p>
              </div>
              <div className="transaction-item">
                <div className="profile">
                  <div className="avatar-placeholder">DR</div>
                  <div>
                    <p>Dianne Russell</p>
                    <small>Disney</small>
                  </div>
                </div>
                <p>$1,545.27</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
