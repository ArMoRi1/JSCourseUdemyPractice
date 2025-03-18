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
    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();
        }

        private void MainForm_Load(object sender, EventArgs e)
        {
            //відкриття підключення до бд            
            Login fl = new Login();
            fl.connection.Open();

            OleDbCommand command = new OleDbCommand("Select DateInvoice, NameCustomers, NameGoods, NameSuppliers, Price*Quantity As Suma From Invoice, Customers, " +
                "Goods, Suppliers Where IdCustomers=Whom And IdSuppliers=FromWhom And IdGoods=Invoice.Goods", fl.connection);

            OleDbDataReader reader = command.ExecuteReader();
            if (reader.HasRows) //ящко є ще дані
            {
                while (reader.Read())
                {
                    dataGridView1.Rows.Add(reader["DateInvoice"], reader["NameCustomers"], reader["NameGoods"], reader["NameSuppliers"], reader["Suma"]);
                }
            }
        }

        private void товариToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.Hide();
            Goods form_goods = new Goods();
            form_goods.ShowDialog();
            this.Show();
        }

        private void toolStripButton11_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void клієнтиToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.Hide();
            Clients form_clients = new Clients();
            form_clients.ShowDialog();
            this.Show();
        }

        private void постачалникиToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.Hide();
            Suppliers form_Suppliers = new Suppliers();
            form_Suppliers.ShowDialog();
            this.Show();
        }

        private void періодиToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.Hide();
            Period form_period = new Period();
            form_period.ShowDialog();
            this.Show();
        }

        private void toolStripButton10_Click(object sender, EventArgs e)
        {
            dataGridView1.Rows.Clear();
            //відкриття підключення до бд            
            Login fl = new Login();
            fl.connection.Open();

            OleDbCommand command = new OleDbCommand("Select DateInvoice, NameCustomers, NameGoods, NameSuppliers, Price*Quantity As Suma From Invoice, Customers, " +
                "Goods, Suppliers Where IdCustomers=Whom And IdSuppliers=FromWhom And IdGoods=Invoice.Goods And NameCustomers='" +
                toolStripTextBox1.Text + "'", fl.connection);

            OleDbDataReader reader = command.ExecuteReader();
            if (reader.HasRows) //ящко є ще дані
            {
                while (reader.Read())
                {
                    dataGridView1.Rows.Add(reader["DateInvoice"], reader["NameCustomers"], reader["NameGoods"], reader["NameSuppliers"], reader["Suma"]);
                }
            }
        }

        private void відобразитиУсіхToolStripMenuItem_Click(object sender, EventArgs e)
        {
            dataGridView1.Rows.Clear();
            //відкриття підключення до бд            
            Login fl = new Login();
            fl.connection.Open();

            OleDbCommand command = new OleDbCommand("Select DateInvoice, NameCustomers, NameGoods, NameSuppliers, Price*Quantity As Suma From Invoice, Customers, " +
                "Goods, Suppliers Where IdCustomers=Whom And IdSuppliers=FromWhom And IdGoods=Invoice.Goods", fl.connection);

            OleDbDataReader reader = command.ExecuteReader();
            if (reader.HasRows) //ящко є ще дані
            {
                while (reader.Read())
                {
                    dataGridView1.Rows.Add(reader["DateInvoice"], reader["NameCustomers"], reader["NameGoods"], reader["NameSuppliers"], reader["Suma"]);
                }
            }
        }

        private void dataGridView1_Click(object sender, EventArgs e)
        {
            toolStripStatusLabel1.Text = "Клієнт: " + dataGridView1.CurrentRow.Cells[1].Value.ToString();
            toolStripStatusLabel2.Text = "Товар: " + dataGridView1.CurrentRow.Cells[2].Value.ToString();
            toolStripStatusLabel3.Text = "Сума: " + dataGridView1.CurrentRow.Cells[4].Value.ToString();
        }

        private void видалитиToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.Hide();
            Invoice form_invoice = new Invoice();
            form_invoice.ShowDialog();
            this.Show();
        }

        private void створитиToolStripMenuItem_Click(object sender, EventArgs e)
        {


            this.Hide();
            AddInvoice form_addinvoice = new AddInvoice();
            form_addinvoice.ShowDialog();
            this.Show();
        }

        private void проданіТовариЗаПеріодToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.Hide();
            TovarPeriod form_tovarPeriod = new TovarPeriod();
            form_tovarPeriod.ShowDialog();
            this.Show();
        }

        private void проданіТовариЗаКлієномToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.Hide();
            TovarKlient form_tovarKlient = new TovarKlient();
            form_tovarKlient.ShowDialog();
            this.Show();
        }

        private void проПрограмуToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.Hide();
            AboutBox1 form_aboutbox = new AboutBox1();
            form_aboutbox.ShowDialog();
            this.Show();
        }

        private void довідкаToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            Help.ShowHelp(this, "help.chm");
        }
    }
}
