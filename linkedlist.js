class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{

    constructor(){
        this.head = null;

    }

    insert_at_beginning(element){
        const node = new Node(element);
        node.next = this.head;
        this.head = node;
    }

    traverse(){
        let current = this.head;
        let output = "";

        while(current){
            output += current.value + " ";
            current = current.next;


        }

        return output;

    }

    insert_at_end(element){
        const node = new Node(element);

        if(!this.head){
            this.head = node;
            return;
        
        }

        let current = this.head;

        while(current.next){
            current = current.next
        }
            
        current.next = node;

    }
}

let list1 = new LinkedList();
list1.insert_at_end(5);
list1.insert_at_beginning(3);
list1.insert_at_end(1);
console.log(list1.traverse());

