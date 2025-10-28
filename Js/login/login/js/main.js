// ============================================
// GLOBAL VARIABLES & STATE MANAGEMENT
// ============================================

let currentUser = null;
let transactions = [];
let sortDirection = {};

// ============================================
// INITIALIZATION
// ============================================

function init() {
    setupFormValidation();
    checkAuth();
    setupEventListeners();
}

// ============================================
// AUTHENTICATION
// ============================================

// Check if user is authenticated
function checkAuth() {
    // Simulate checking authentication
    // In production, check session/token
    const user = {
        username: 'SuperHero',
        email: 'hero@InseeKarn.com'
    };
    
    // Check if we're on dashboard page
    const isDashboardPage = window.location.pathname.includes('dashboard.html');
    
    if (isDashboardPage && user) {
        currentUser = user;
        loadDashboardData();
    }
}

// Logout
function logout() {
    currentUser = null;
    window.location.href = 'login.html';
}

// ============================================
// FORM VALIDATION
// ============================================

function setupFormValidation() {
    // Login Form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Signup Form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
    
    // Forgot Password Form
    const forgotForm = document.getElementById('forgotForm');
    if (forgotForm) {
        forgotForm.addEventListener('submit', handleForgotPassword);
    }
}

// Handle Login
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Reset error messages
    document.getElementById('loginEmailError').classList.remove('show');
    document.getElementById('loginPasswordError').classList.remove('show');
    
    let hasError = false;
    
    // Validate email
    if (!email) {
        showError('loginEmailError', 'Email or username is required');
        hasError = true;
    }
    
    // Validate password
    if (!password) {
        showError('loginPasswordError', 'Password is required');
        hasError = true;
    } else if (password.length < 8) {
        showError('loginPasswordError', 'Password must be at least 8 characters');
        hasError = true;
    }
    
    if (!hasError) {
        // Simulate successful login
        // currentUser = { username: email.split('@')[0], email: email };
        alert('This is a demo template. Replace with your backend logic.🦸');
        // window.location.href = 'dashboard.html';
    }
}

// Handle Signup
function handleSignup(e) {
    e.preventDefault();
    
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    // Reset error messages
    document.getElementById('signupUsernameError').classList.remove('show');
    document.getElementById('signupEmailError').classList.remove('show');
    document.getElementById('signupPasswordError').classList.remove('show');
    document.getElementById('signupConfirmPasswordError').classList.remove('show');
    
    let hasError = false;
    
    // Validate username
    if (!username) {
        showError('signupUsernameError', 'Username is required');
        hasError = true;
    } else if (username.length < 3) {
        showError('signupUsernameError', 'Username must be at least 3 characters');
        hasError = true;
    }
    
    // Validate email
    if (!email) {
        showError('signupEmailError', 'Email is required');
        hasError = true;
    } else if (!isValidEmail(email)) {
        showError('signupEmailError', 'Please enter a valid email address');
        hasError = true;
    }
    
    // Validate password
    if (!password) {
        showError('signupPasswordError', 'Password is required');
        hasError = true;
    } else if (password.length < 8) {
        showError('signupPasswordError', 'Password must be at least 8 characters');
        hasError = true;
    }
    
    // Validate confirm password
    if (!confirmPassword) {
        showError('signupConfirmPasswordError', 'Please confirm your password');
        hasError = true;
    } else if (password !== confirmPassword) {
        showError('signupConfirmPasswordError', 'Passwords do not match');
        hasError = true;
    }
    
    if (!hasError) {
        // Simulate successful signup
        // currentUser = { username: username, email: email };
        alert('This is a demo template. Replace with your backend logic.🚀');
        // window.location.href = 'dashboard.html';
    }
}

// Handle Forgot Password
function handleForgotPassword(e) {
    e.preventDefault();
    
    const email = document.getElementById('forgotEmail').value;
    
    // Reset error messages
    document.getElementById('forgotEmailError').classList.remove('show');
    
    let hasError = false;
    
    // Validate email
    if (!email) {
        showError('forgotEmailError', 'Email is required');
        hasError = true;
    } else if (!isValidEmail(email)) {
        showError('forgotEmailError', 'Please enter a valid email address');
        hasError = true;
    }
    
    if (!hasError) {
        // alert('Password reset link sent to ' + email + '! Check your inbox. 📧');
        alert('This is a demo template. Replace with your backend logic.');
        // window.location.href = 'index.html';
    }
}

// Show error message
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Handle OAuth Login (Placeholder)
function handleOAuthLogin(provider) {
    alert(`OAuth login with ${provider} would be implemented here. This is a placeholder for integration with ${provider} OAuth API.`);
    // In production, this would redirect to OAuth provider
    // Example: window.location.href = '/auth/' + provider;
}

// ============================================
// DASHBOARD DATA MANAGEMENT
// ============================================

// Generate sample transaction data
function generateSampleData() {
    const descriptions = [
        'Product Sale', 'Service Payment', 'Subscription Fee', 'Consulting Work',
        'Office Supplies', 'Software License', 'Marketing Campaign', 'Client Refund',
        'Team Lunch', 'Equipment Purchase', 'Website Hosting', 'Cloud Storage'
    ];
    
    const types = ['income', 'expense'];
    const statuses = ['completed', 'pending', 'failed'];
    
    transactions = [];
    
    for (let i = 1; i <= 20; i++) {
        const type = types[Math.floor(Math.random() * types.length)];
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const amount = (Math.random() * 5000 + 100).toFixed(2);
        const date = new Date(2025, 9, Math.floor(Math.random() * 30) + 1);
        
        transactions.push({
            id: `TXN-${1000 + i}`,
            date: date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
            dateObj: date,
            description: descriptions[Math.floor(Math.random() * descriptions.length)],
            type: type,
            amount: parseFloat(amount),
            status: status
        });
    }
}

// Load dashboard data
function loadDashboardData() {
    generateSampleData();
    updateStats();
    renderTransactionTable();
    renderChart();
    
    // Update username
    if (currentUser) {
        const userNameElement = document.getElementById('userName');
        if (userNameElement) {
            userNameElement.textContent = currentUser.username;
        }
    }
}

// Update statistics
function updateStats() {
    const income = transactions
        .filter(t => t.type === 'income' && t.status === 'completed')
        .reduce((sum, t) => sum + t.amount, 0);
    
    const expense = transactions
        .filter(t => t.type === 'expense' && t.status === 'completed')
        .reduce((sum, t) => sum + t.amount, 0);
    
    const pending = transactions.filter(t => t.status === 'pending').length;
    const activeUsers = Math.floor(Math.random() * 500) + 100;
    
    const totalIncomeEl = document.getElementById('totalIncome');
    const totalExpenseEl = document.getElementById('totalExpense');
    const activeUsersEl = document.getElementById('activeUsers');
    const pendingTasksEl = document.getElementById('pendingTasks');
    
    if (totalIncomeEl) totalIncomeEl.textContent = `$${income.toLocaleString()}`;
    if (totalExpenseEl) totalExpenseEl.textContent = `$${expense.toLocaleString()}`;
    if (activeUsersEl) activeUsersEl.textContent = activeUsers;
    if (pendingTasksEl) pendingTasksEl.textContent = pending;
    
    // Update change percentages (simulated)
    const incomeChangeEl = document.getElementById('incomeChange');
    const expenseChangeEl = document.getElementById('expenseChange');
    const usersChangeEl = document.getElementById('usersChange');
    const tasksChangeEl = document.getElementById('tasksChange');
    
    if (incomeChangeEl) incomeChangeEl.textContent = '+12.5% from last month';
    if (expenseChangeEl) expenseChangeEl.textContent = '+8.3% from last month';
    if (usersChangeEl) usersChangeEl.textContent = '+15.7% from last month';
    if (tasksChangeEl) tasksChangeEl.textContent = '5 completed today';
}

// Render transaction table
function renderTransactionTable(filteredData = null) {
    const data = filteredData || transactions;
    const tbody = document.getElementById('transactionTableBody');
    
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    data.forEach(transaction => {
        const row = document.createElement('tr');
        
        const typeSymbol = transaction.type === 'income' ? '+' : '-';
        const typeColor = transaction.type === 'income' ? 'var(--success)' : 'var(--danger)';
        
        row.innerHTML = `
            <td>${transaction.id}</td>
            <td>${transaction.date}</td>
            <td>${transaction.description}</td>
            <td style="text-transform: capitalize;">${transaction.type}</td>
            <td style="color: ${typeColor}; font-weight: 700;">
                ${typeSymbol}$${transaction.amount.toLocaleString()}
            </td>
            <td>
                <span class="status-badge ${transaction.status}">${transaction.status}</span>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

// ============================================
// TABLE FILTERING & SORTING
// ============================================

// Filter transactions
function filterTransactions() {
    const searchInput = document.getElementById('searchInput');
    const statusFilter = document.getElementById('statusFilter');
    
    if (!searchInput || !statusFilter) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const statusFilterValue = statusFilter.value;
    
    let filtered = transactions;
    
    // Apply search filter
    if (searchTerm) {
        filtered = filtered.filter(t => 
            t.description.toLowerCase().includes(searchTerm) ||
            t.id.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply status filter
    if (statusFilterValue !== 'all') {
        filtered = filtered.filter(t => t.status === statusFilterValue);
    }
    
    renderTransactionTable(filtered);
}

// Reset filters
function resetFilters() {
    const searchInput = document.getElementById('searchInput');
    const statusFilter = document.getElementById('statusFilter');
    
    if (searchInput) searchInput.value = '';
    if (statusFilter) statusFilter.value = 'all';
    
    renderTransactionTable();
}

// Sort table by column
function sortTable(columnIndex) {
    const tbody = document.getElementById('transactionTableBody');
    if (!tbody) return;
    
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    // Initialize sort direction for this column
    if (!sortDirection[columnIndex]) {
        sortDirection[columnIndex] = 'asc';
    } else {
        sortDirection[columnIndex] = sortDirection[columnIndex] === 'asc' ? 'desc' : 'asc';
    }
    
    const direction = sortDirection[columnIndex];
    
    rows.sort((a, b) => {
        const aValue = a.cells[columnIndex].textContent.trim();
        const bValue = b.cells[columnIndex].textContent.trim();
        
        // Handle numeric values
        const aNum = parseFloat(aValue.replace(/[^0-9.-]/g, ''));
        const bNum = parseFloat(bValue.replace(/[^0-9.-]/g, ''));
        
        if (!isNaN(aNum) && !isNaN(bNum)) {
            return direction === 'asc' ? aNum - bNum : bNum - aNum;
        }
        
        // Handle text values
        return direction === 'asc' 
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
    });
    
    // Clear and re-append sorted rows
    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
}

// ============================================
// CHART RENDERING
// ============================================

// Render income vs expense chart
function renderChart() {
    const canvas = document.getElementById('incomeExpenseChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    canvas.width = canvas.parentElement.clientWidth - 40;
    canvas.height = 260;
    
    // Calculate monthly data
    const monthlyData = calculateMonthlyData();
    
    // Chart settings
    const padding = 40;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
    const barWidth = chartWidth / (months.length * 2.5);
    const maxValue = Math.max(...monthlyData.income, ...monthlyData.expense);
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw background grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(canvas.width - padding, y);
        ctx.stroke();
    }
    
    // Draw bars
    months.forEach((month, index) => {
        const x = padding + (chartWidth / months.length) * index + barWidth / 2;
        
        // Income bar (green)
        const incomeHeight = (monthlyData.income[index] / maxValue) * chartHeight;
        ctx.fillStyle = '#51cf66';
        ctx.fillRect(x, canvas.height - padding - incomeHeight, barWidth, incomeHeight);
        
        // Expense bar (red)
        const expenseHeight = (monthlyData.expense[index] / maxValue) * chartHeight;
        ctx.fillStyle = '#ff5722';
        ctx.fillRect(x + barWidth + 5, canvas.height - padding - expenseHeight, barWidth, expenseHeight);
        
        // Month labels
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(month, x + barWidth / 2 + 2.5, canvas.height - padding + 20);
    });
    
    // Draw legend
    ctx.fillStyle = '#51cf66';
    ctx.fillRect(padding, 10, 20, 20);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Income', padding + 30, 25);
    
    ctx.fillStyle = '#ff5722';
    ctx.fillRect(padding + 120, 10, 20, 20);
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Expense', padding + 150, 25);
}

// Calculate monthly data
function calculateMonthlyData() {
    const income = Array(10).fill(0).map(() => Math.random() * 15000 + 5000);
    const expense = Array(10).fill(0).map(() => Math.random() * 12000 + 3000);
    
    return { income, expense };
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    }
    
    // Search input real-time filtering
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filterTransactions);
    }
    
    // Status filter change
    const statusFilter = document.getElementById('statusFilter');
    if (statusFilter) {
        statusFilter.addEventListener('change', filterTransactions);
    }
    
    // Responsive chart resize
    window.addEventListener('resize', () => {
        if (currentUser && document.getElementById('incomeExpenseChart')) {
            renderChart();
        }
    });
}

// ============================================
// INITIALIZE APP
// ============================================

// Run init when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}