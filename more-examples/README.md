## More Examples

These example Node.js scripts illustrate some additional concepts
which would take too long to cover during a live presentation.


### dns.js

This script uses the built-in [dns module](http://nodejs.org/api/dns.html)
to report on the IP address of a given domain name.
The usage is:

```
node dns.js [domain]
```


### base64.js

This example uses the built-in [Buffer](http://nodejs.org/api/buffer.html)
object to convert strings between ascii and base64 encoding.
It will report its own command line usage if you run it with `node base64.js`

Try `node base64.js -d dGVzdHVzZXI6cGFzc3dvcmQx` to remind yourself that
base64 is _encoding_, not _encryption_!


### lineCount.js

In this example, a file is read from a [stream](http://nodejs.org/api/stream.html).
When working with big files, loading an entire string into memory can be expensive.
Using streams avoids this; you only work with a small chunk at a time.

```
node lineCount.js [file]
```


### changeCase.js

This script (and the [CaseStream.js](./CaseStream.js) module) demonstrate more stream tricks:
piping and transforms.

The [pipe()](http://nodejs.org/api/stream.html#stream_readable_pipe_destination_options)
method of a readable stream lets you flow all the data to a writeable (or duplex) stream.

The [stream.Transform](http://nodejs.org/api/stream.html#stream_class_stream_transform)
class allows you to create a duplex stream which alters the data one chunk at a time.
This can be used to do interesting things like crypto, compression,
data conversion, or even file parsing/reporting.

Enter `node changeCase.js` to get usage.

Try: `node changeCase.js upper test.txt`
