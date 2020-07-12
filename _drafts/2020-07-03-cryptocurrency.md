Ledger (contains all the payments being made)needs trust for it to work

Each person has public and private key

Signature = Sign(Message, private key)
Verify(Message, Signature, public key) = True/False
Is this signature signed with the private key associated with this public key?
256 bit signature makes it hard to guess -- could only produce if they knew the private key associated with the public key

Each transaction also has a unique ID associated with it, to prevent duplication of the entire message + signature
so the signature of each transaction will be different, even if it’s duplicated

Disconnect ledger from real world cash
Prevent spending on the ledger more than the person is carrying

Bitcoin = ledger: history of transactions

How can you trust central location / website that hosts this ledger?
– If everyone has their own copy of their ledger, how can you make sure that everyone is recording all the same actions?

Trust whichever ledger has the most computation work put into it
Cryptographic hash function
SHA256(“Message/file”) = hash / digest (256 bits long for this hash function) 
Infeasible to compute in reverse direction, from hash/digest to input message. You’d need to guess and check.
No hard proof that this is hard to do, but no one’s ever been able to do it
* Divide ledger into blocks, which contain part of the transactions + proof of work 
(a special number)
* Also has to contain the hash to the previous block
* This is why it's called blockchain!
* Block creator creates block and broadcasts it out, and gets block reward for
the effort put into making the block (mining)
  * Block reward doesn't have to be signed, and adds to total money supply
  People are kind of competing to find the number first
* Everyone is maintaining their own copy of the blockchain
* If 2 blockchains are broadcast with conflicting transaction histories, defer
to the longest one with the most work put into it
* ==> Decentralized consensus




