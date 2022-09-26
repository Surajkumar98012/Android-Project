package com.example.justjava;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;

import java.text.NumberFormat;


import android.util.Log;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

/**
 * This app displays an order form to order coffee.
 */
public class MainActivity extends AppCompatActivity {
    int numberOfCoffees = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void incriment(View view) {
        if (numberOfCoffees == 100) {
            // Show an error message as a toast
            Toast.makeText(this, "You cannot have more than 100 coffees", Toast.LENGTH_SHORT).show();
            // Exit this method early because there's nothing left to do
            return;
        }

        numberOfCoffees = numberOfCoffees + 1;
        display(numberOfCoffees);
    }

    public void decriment(View view) {

        if (numberOfCoffees == 0) {
            // Show an error message as a toast
            Toast.makeText(this, "You cannot have less than 1 coffee", Toast.LENGTH_SHORT).show();
            // Exit this method early because there's nothing left to do
            return;
        }
        numberOfCoffees = numberOfCoffees - 1;
        display(numberOfCoffees);

    }


    /**
     * This method is called when the order button is clicked.
     */
    public void submitOrder(View view) {
        EditText text = (EditText) findViewById(R.id.Customer_name);
        String name = text.getText().toString();

        CheckBox whippedCreamCheckbox = findViewById(R.id.notify_me_checkbox);
        boolean hasWhippedCream = whippedCreamCheckbox.isChecked();

        CheckBox whippedCreamCheckboxes = findViewById(R.id.notify_me_checkboxes);
        boolean haschoclate = whippedCreamCheckboxes.isChecked();

        int price = calculateprice(hasWhippedCream, haschoclate);
        String priceMessage = createOrderSummery(name, price, hasWhippedCream, haschoclate);

        Intent intent = new Intent(Intent.ACTION_SENDTO);
        intent.setData(Uri.parse("mailto:")); // only email apps should handle this
        intent.putExtra(Intent.EXTRA_SUBJECT, "Just java order for:" + name);
        intent.putExtra(Intent.EXTRA_TEXT, priceMessage);
        if (intent.resolveActivity(getPackageManager()) != null) {
            startActivity(intent);
        }


    }

    public void submit(View view) {
        CheckBox whippedCreamCheckbox = findViewById(R.id.notify_me_checkbox);
        boolean hasWhippedCream = whippedCreamCheckbox.isChecked();

        CheckBox whippedCreamCheckboxes = findViewById(R.id.notify_me_checkboxes);
        boolean haschoclate = whippedCreamCheckboxes.isChecked();

        int price = calculateprice(hasWhippedCream, haschoclate);
        String priceMessage = "\nQuantity:" + numberOfCoffees;
        priceMessage += "\nTotal: $" + price;
        displayMessage(priceMessage);
    }


    private int calculateprice(boolean addwhippedCream, boolean addchoclate) {
        int basePrice = 5;
        if (addwhippedCream) {
            basePrice = basePrice + 1;
        }
        if (addchoclate) {
            basePrice = basePrice + 2;
        }
        return numberOfCoffees * basePrice;
    }


    private String createOrderSummery(String name, int price, boolean addwhippedCream, boolean addchoclate) {
        String priceMessage = "Name: " + name;
        priceMessage += "\nAdd whipped cream? " + addwhippedCream;
        priceMessage += "\nAdd Choclate? " + addchoclate;
        priceMessage += "\nQuantity:" + numberOfCoffees;
        priceMessage += "\nTotal: $" + price;
        priceMessage += "\nThank you!";
        return priceMessage;
    }


    /**
     * This method displays the given quantity value on the screen.
     */
    private void display(int number) {
        TextView quantityTextView = (TextView) findViewById(R.id.quantity_text_view);
        quantityTextView.setText("" + number);
    }

    /**
     * This method displays the given price on the screen.
     * <p>
     * private void displayPrice(int number) {
     * TextView priceTextView = (TextView) findViewById(R.id.price_text_view);
     * priceTextView.setText(NumberFormat.getCurrencyInstance().format(number));
     * }
     * <p>
     * /**
     * This method displays the given text on the screen.
     */
    private void displayMessage(String message) {
        TextView priceTextView = (TextView) findViewById(R.id.price_text_view);
        priceTextView.setText(message);

    }
}
