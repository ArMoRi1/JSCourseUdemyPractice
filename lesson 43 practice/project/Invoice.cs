using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.OleDb;
namespace project
{
    public partial class Invoice : Form
    {
        public Invoice()
        {
            InitializeComponent();
        }

        private void Invoice_Load(object sender, EventArgs e)
        {
            // відкриття підключення до бд
            Login fl = new Login();
            fl.connection.Open();
            string sql = "Select IdInvoice, DateInvoice, NameCustomers, NameSuppliers, ThroughtWhom, DovirSeria, " +
                " DovirNomer, DovirDate, Basis, NameGoods, Quantity From Invoice, Customers, Suppliers, Goods " +
                "Where Goods=IdGoods And Whom=IdCustomers And FromWhom=IdSuppliers";
            //створюємо об'єкт DataAdapter
            OleDbDataAdapter adapter = new OleDbDataAdapter(sql, fl.connection);
            //створюємо об'єкт DataSet
            DataSet ds = new DataSet();
            //заповнюємо DataSet
            adapter.Fill(ds);
            dataGridView1.DataSource = ds.Tables[0];
        }

        private void видалитиToolStripMenuItem_Click(object sender, EventArgs e)
        {
            // відкриття підключення до бд
            Login fl = new Login();
            fl.connection.Open();

            string sql_select = "Select IdInvoice, DateInvoice, NameCustomers, NameSuppliers, ThroughtWhom, DovirSeria, " +
                " DovirNomer, DovirDate, Basis, NameGoods, Quantity From Invoice, Customers, Suppliers, Goods " +
                "Where Goods=IdGoods And Whom=IdCustomers And FromWhom=IdSuppliers";
            OleDbDataAdapter adapter = new OleDbDataAdapter(sql_select, fl.connection);

            string sql_delete = "Delete From Invoice Where IdInvoice=" + dataGridView1.CurrentCell.Value;
            adapter.DeleteCommand = new OleDbCommand(sql_delete, fl.connection);
            adapter.DeleteCommand.ExecuteNonQuery();

            DataSet ds = new DataSet();
            adapter.Fill(ds);
            dataGridView1.DataSource = ds.Tables[0];
        }
    }
}
