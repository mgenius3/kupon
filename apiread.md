KUPON API CALLS

1.  REGISTER
    url: https://kupon.com.ng/user/register
    method: POST
    payload: (email, password, firstName, lastName, telephone, address)
2.  LOGIN
    url: https://kupon.com.ng/user/login
    method: POST
    payload: (email, password)

3.  GET A PARTICULAR USER INFORMATION
    url: https://kupon.com.ng/user/user_id (note: you can get the id from the token returned to you when you loged in or register)
    method: GET

4.  SEND A REPORT/MESSAGE FROM THE CONTACT PAGE
    url: https://kupon.com.ng/user/contact_message
    method: POST
    payload: (fullName, email, telephone, message)

5.  SEND AN ITEM TO LOGISTICS

    # url: https://kupon.com.ng/logistic/send

    # method: POST

    # payload:

        (packageName, files, firstName, lastName, email, telephone, company,  pickupAddress, pickupCity, pickupState, postCode, receiverTelephone, deliveryAddress, deliveryCity, deliveryState, packageCode, description,)

    # note:

        for the files, convert each images to base64 encodeing, and the string base64 encoding in an array and stringify the array with JSON, so our server can process it

    # header: pass the user token for authorization

6.  GET ALL LOGISTICS ITEM SENT TO THE USER

    # url: https://kupon.com.ng/logistic/user

    # method: GET

    # header: pass the user token for authorization

7.  TRACKING LOGISTIC ITEM

    # url: https://kupon.com.ng/logistic/track_package

    # note: don't use on app only for website

8.  LOGISTICS PAYMENT

    # url: https://kupon.com.ng/logistic/pay/:id_of_the_logistic_package

    # method: GET

    # header: pass the user token for authorization

9.  GET ALL MARKET ITEM

    # url: https://kupon.com.ng/sell/

    # method: GET

10. GET A PARTICULAR MARKET ITEM

    # url: https://kupon.com.ng/sell/:market_package_id

    # method: GET

    # header: pass the user token for authorization

11. SELL AN ITEM

    # url: https://kupon.com.ng/sell/

    # method: POST

    # payload :

             (  files,
                title,
                location,
                city,
                state,
                category,
                material,
                conditions,
                price,
                description,)

    # header: pass the user token for authorization

12. GET ALL SELL PACKAGES OF A PARTICULAR USER

    # url: https://kupon.com.ng/sell/user/package/

    # method: GET

    # header: pass the user token for authorization

13. PAYMENT FOR A SELL PACKAGE

    # url: https://kupon.com.ng/sell/pay/:sell_item_package_id

    # method: GET

    # header: pass the user token for authentication

14. DELETE ITEM FOR SELL PACKAGE

    # url: https://kupon.com.ng/sell/delete/:_setl_item_package

    # method: DELETE

    # header: pass the user token for authentication
