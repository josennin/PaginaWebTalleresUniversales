# Include the Autoloader (see "Libraries" for install instructions)
require 'vendor/autoload.php';
use Mailgun\Mailgun;

# Instantiate the client.
$mgClient = new Mailgun('key-a3da48eb695c94c829d87c9dc375732e');
$domain = "sandboxdd314251bd51469086a6b18bdc6ea34c.mailgun.org";

# Make the call to the client.
$result = $mgClient->sendMessage("$domain",
          array('from'    => 'Mailgun Sandbox <postmaster@sandboxdd314251bd51469086a6b18bdc6ea34c.mailgun.org>',
                'to'      => 'Jose Andres <joseandresuzumaki@gmail.com>',
                'subject' => 'Hello Jose Andres',
                'text'    => 'Congratulations Jose Andres, you just sent an email with Mailgun!  You are truly awesome! '));

# You can see a record of this email in your logs: https://mailgun.com/app/logs .

# You can send up to 300 emails/day from this sandbox server.
# Next, you should add your own domain so you can send 10,000 emails/month for free.