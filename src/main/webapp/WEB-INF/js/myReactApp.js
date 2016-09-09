
var maxId = 0;


/*var ProductForm = React.createClass({
    getInitialState: function() {
        return {name: '', category: '', price: ''};
    },

    handleCategoryChange: function(e) {
        this.setState({category: e.target.value});
    },

    handleNameChange: function(e) {
        this.setState({name: e.target.value});
    },

    handlePriceChange: function(e) {
        this.setState({price: e.target.value});
    },

    handleSubmit: function(e) {
        e.preventDefault();
        var name = this.state.name.trim();
        var category = this.state.category.trim();
        var price = this.state.price.trim();
        //var nextid = this.state.maxid.trim() + 1;
        //alert(nextid);
        if (!category || !name || !price) {
            alert("!");
            return;
        }
        this.props.onProductSubmit({name: name, category: category, price: price}); //set the properties
        this.setState({name: '', category: '', price: ''});
    },

    render: function() {
        return (
            <form className="productForm" onSubmit={this.handleSubmit}>
        <h3>Add New Product</h3>
        <input
        type="text"
        placeholder="Product Category"
        value={this.state.category}
        onChange={this.handleCategoryChange}
        />
        <input
        type="text"
        placeholder="Product Name"
        value={this.state.name}
        onChange={this.handleNameChange}
        />
        <input
        type="text"
        placeholder="Price"
        value={this.state.price}
        onChange={this.handlePriceChange}
        />
        <input type="submit" value="Post" />
            <select multiple={false} value={['Electronics', 'Sporting Goods']} />
        </form>
        );
    }
});*/


var Q1Row = React.createClass({
    handleClick: function(e) {
        alert(this.props.msgKey);
    },
    render: function() {
        var msgKey = this.props.active == "Y" ?
            this.props.msgKey :
        <span style={{color: 'red'}}>{this.props.msgKey}</span>;
        var trunced = this.props.msgMessage.substr(0,15);
        return (
            <tr>
                <td className="tableCellCol1">{msgKey}</td>
                <td className="tableCellCol2"><div className="tooltip">{trunced}...<span className="tooltiptext">{this.props.msgMessage}</span></div></td>
                <td className="tableCellCol3">{this.props.active}</td>
                <td className="tableCellCol4"><button type="button" className="button" onClick={this.handleClick}>Edit</button></td>
            </tr>
        );
    }
});


var Q1HeaderRow = React.createClass({
    render: function() {
        return (<tr>
                    <th id="tableHeadCol1">Message Key</th>
                    <th className="tableHeadCenter">Message</th>
                    <th className="tableHeadRight"> </th>
                </tr>);
    }
});


var MessagesList = React.createClass({
    render: function() {
        var rows = [];
        var lastCategory = null;
        var headerRow = null;

        this.props.data.forEach(function(msgObj) {

            /*if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
             return;
             }*/
            /*if (headerRow == null) {
                rows.push(<Q1HeaderRow key="messages_header"/>);
                headerRow = 1;
            }*/
            /*if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }*/

            rows.push(
                <Q1Row key={msgObj.id} id={msgObj.id} msgKey={msgObj.msgKey}
                    msgMessage={msgObj.msgMessage} active={msgObj.active}>
                    {msgObj.id}
                    {msgObj.msgKey}
                    {msgObj.msgMessage}
                    {msgObj.active}
                </Q1Row>
            );
            //lastCategory = msgObj.category;
            if (maxId < msgObj.id) {
                maxId = msgObj.id;
            }
        }.bind(this));
            return (
                <table className="messagesTable">
                    <thead>
                        <tr>
                            <th className="tableHeadCol1">Message Key</th>
                            <th className="tableHeadCol2">Message</th>
                            <th className="tableHeadCol3">Active</th>
                            <th className="tableHeadCol4"></th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
        );
    }
});


var MessagesCell = React.createClass({

    loadPropertiesFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleProductSubmit: function(product) {
        var products = this.state.data;
        // Optimistically set an id on the new item. It will be replaced by an
        // id generated by the server. In a production application you would likely
        // not use Date.now() for this and would have a more robust system in place.
        //product.id = 99; //Date.now(); //NO
        product.id = this.getNewMessageId;
        product.stocked = false;
        //product.category = "Placeholder";
        //product.price = "$99.99";
        //product.author = "test";
        //product.text = "test";
        var newProducts = products.concat([product]);
        this.setState({data: newProducts});
        //submit to server and refresh the list
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: product,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({data: products});
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        this.loadPropertiesFromServer();
        setInterval(this.loadPropertiesFromServer, this.props.pollInterval);
    },

    getNewMessageId: function() {
        var nextid = maxId + 1;
        return nextid;
    },

    render: function() {
        return (
                <div id="messagesBox">
                    <div id="messagesBoxData">
                        <MessagesList data={this.state.data} />
                    </div>
                </div>
        );
    }
});





//http://localhost:8080/nbimessages/list
ReactDOM.render(
<MessagesCell url="/data/messages.json" pollInterval={60000}/>, document.getElementById('gridQ1Div')
);